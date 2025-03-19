import type { Vehicle, Booking } from "./types"
import { addDays, addHours, subDays } from "date-fns"

// Generate random date within a range
function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

// Generate random duration in hours (1-48)
function randomDuration() {
  return Math.floor(Math.random() * 48) + 1
}

export function generateMockData() {
  // Generate vehicles
  const vehicleTypes = ["Passenger car","Truck","Van","Bus","Special vehicle",]
  const locations = ["Stuttgart", "Hamburg", "München", "Köln", "Frankfurt"]

  const vehicles: Vehicle[] = Array.from({ length: 12 }, (_, i) => ({
    id: `v-${i + 1}`,
    name: `Vehicle ${i + 1}`,
    type: vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
  }))

  // Generate bookings
  const bookingStatuses: ["Confirmed", "Pending", "Completed"] = ["Confirmed", "Pending", "Completed"]

  const now = new Date()
  const startRange = subDays(now, 7)
  const endRange = addDays(now, 21)

  const bookings: Booking[] = Array.from({ length: 40 }, (_, i) => {
    const startTime = randomDate(startRange, endRange)
    const endTime = addHours(startTime, randomDuration())

    return {
      id: `b-${i + 1}`,
      vehicleId: vehicles[Math.floor(Math.random() * vehicles.length)].id,
      title: `Booking ${i + 1}`,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      status: bookingStatuses[Math.floor(Math.random() * bookingStatuses.length)],
    }
  })

  return { vehicles, bookings }
}

