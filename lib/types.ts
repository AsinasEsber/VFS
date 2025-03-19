export type ViewMode = "day" | "week" | "month";

export type VehicleType =
  | "All"
  | "Passenger car"
  | "Truck"
  | "Van"
  | "Bus"
  | "Special vehicle";

export type BookingStatus = "All" | "Confirmed" | "Pending" | "Completed";


export interface Vehicle {
    id: string
    name: string
    type: string
    location: string
  }
  
  export interface Booking {
    id: string
    vehicleId: string
    title: string
    startTime: string
    endTime: string
    status: BookingStatus
  }
  