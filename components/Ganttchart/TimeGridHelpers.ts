import {
  isWithinInterval,
  parseISO,
  isSameDay,
  differenceInHours,
  differenceInDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { Booking, ViewMode } from "@/lib/types";

// Check if a booking is visible in the current time frame
export function isBookingVisible(
  booking: Booking,
  currentDate: Date,
  viewMode: ViewMode
): boolean {
  const startTime = parseISO(booking.startTime);
  const endTime = parseISO(booking.endTime);

  if (viewMode === "day") {
    return (
      isSameDay(startTime, currentDate) ||
      isSameDay(endTime, currentDate) ||
      (startTime < currentDate && endTime > currentDate)
    );
  } else if (viewMode === "week") {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
    return (
      isWithinInterval(startTime, { start: weekStart, end: weekEnd }) ||
      isWithinInterval(endTime, { start: weekStart, end: weekEnd }) ||
      (startTime < weekStart && endTime > weekEnd)
    );
  } else if (viewMode === "month") {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    return (
      isWithinInterval(startTime, { start: monthStart, end: monthEnd }) ||
      isWithinInterval(endTime, { start: monthStart, end: monthEnd }) ||
      (startTime < monthStart && endTime > monthEnd)
    );
  }
  return false;
}

// Calculate booking position and width
export function calculateBookingStyle(
  booking: Booking,
  currentDate: Date,
  viewMode: ViewMode
) {
  const startTime = parseISO(booking.startTime);
  const endTime = parseISO(booking.endTime);

  if (viewMode === "day") {
    // For day view, position is based on hours
    const dayStart = new Date(currentDate);
    dayStart.setHours(0, 0, 0, 0);

    const startHour = Math.max(0, differenceInHours(startTime, dayStart));
    const endHour = Math.min(24, differenceInHours(endTime, dayStart));
    const duration = endHour - startHour;

    const left = (startHour / 24) * 100;
    const width = (duration / 24) * 100;

    return { left: `${left}%`, width: `${width}%` };
  } else if (viewMode === "week") {
    // For week view, position is based on days
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

    const adjustedStart = startTime < weekStart ? weekStart : startTime;
    const adjustedEnd = endTime > weekEnd ? weekEnd : endTime;

    const startDayOffset = differenceInDays(adjustedStart, weekStart);
    const duration = differenceInDays(adjustedEnd, adjustedStart) + 1;

    const left = (startDayOffset / 7) * 100;
    const width = (duration / 7) * 100;

    return { left: `${left}%`, width: `${width}%` };
  } else if (viewMode === "month") {
    // For month view, position is based on days
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = differenceInDays(monthEnd, monthStart) + 1;

    const adjustedStart = startTime < monthStart ? monthStart : startTime;
    const adjustedEnd = endTime > monthEnd ? monthEnd : endTime;

    const startDayOffset = differenceInDays(adjustedStart, monthStart);
    const duration = differenceInDays(adjustedEnd, adjustedStart) + 1;

    const left = (startDayOffset / daysInMonth) * 100;
    const width = (duration / daysInMonth) * 100;

    return { left: `${left}%`, width: `${width}%` };
  }

  return { left: "0%", width: "0%" };
} 