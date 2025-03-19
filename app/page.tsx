"use client";
import Filter from "@/components/Filter";
import { GanttChart } from "@/components/Ganttchart";
import Header from "@/components/Header";
import { BookingStatus, VehicleType, ViewMode } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [vehicleType, setVehicleType] = useState<VehicleType>("All");
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>("All");

  return (
    <>
      <Header viewMode={viewMode} setViewMode={setViewMode}></Header>
      <Filter
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
        bookingStatus={bookingStatus}
        setBookingStatus={setBookingStatus}
      ></Filter>
      <GanttChart
        viewMode={viewMode}
        vehicleType={vehicleType}
        bookingStatus={bookingStatus}
      ></GanttChart>
    </>
  );
}
