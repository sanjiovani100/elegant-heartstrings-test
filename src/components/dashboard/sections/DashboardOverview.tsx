import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, Calendar, DollarSign, Ticket } from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-montserrat text-gray-900">Dashboard Overview</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-montserrat">Total Tickets Sold</CardTitle>
            <Ticket className="h-4 w-4 text-fashionista-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-gray-600">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-4 w-4" />
                +20.1%
              </span>{" "}
              vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-montserrat">Revenue Generated</CardTitle>
            <DollarSign className="h-4 w-4 text-fashionista-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-gray-600">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-4 w-4" />
                +15.3%
              </span>{" "}
              vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-montserrat">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-fashionista-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-gray-600">
              <span className="text-red-500 inline-flex items-center">
                <ArrowDownRight className="h-4 w-4" />
                -4.5%
              </span>{" "}
              vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-montserrat">Event Countdown</CardTitle>
            <Calendar className="h-4 w-4 text-fashionista-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 Days</div>
            <p className="text-xs text-gray-600">Until the main event</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}