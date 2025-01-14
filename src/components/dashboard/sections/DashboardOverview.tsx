import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, Calendar, DollarSign, Ticket } from "lucide-react"
import { cn } from "@/lib/utils"

const MetricCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  trendValue,
  trendLabel
}: { 
  title: string
  value: string | number
  icon: any
  trend: "up" | "down"
  trendValue: string
  trendLabel: string
}) => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium font-montserrat">{title}</CardTitle>
      <Icon className="h-4 w-4 text-fashionista-red" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-gray-600 mt-1">
        <span className={cn(
          "inline-flex items-center gap-1",
          trend === "up" ? "text-green-500" : "text-red-500"
        )}>
          {trend === "up" ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {trendValue}
        </span>
        {" "}
        {trendLabel}
      </p>
    </CardContent>
  </Card>
)

const SocialCard = ({
  platform,
  followers,
  trend,
  trendValue
}: {
  platform: string
  followers: number
  trend: "up" | "down"
  trendValue: string
}) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-3">
      <img 
        src={`/lovable-uploads/97aba5d9-e46c-417e-b2ea-8d25683f6fd4.png`} 
        alt={`${platform} icon`}
        className="w-5 h-5"
      />
      <span className="font-medium">{platform}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="font-semibold">{followers.toLocaleString()}</span>
      <span className={cn(
        "text-xs",
        trend === "up" ? "text-green-500" : "text-red-500"
      )}>
        {trendValue}
      </span>
    </div>
  </div>
)

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-montserrat text-gray-900">Overview</h2>
        <p className="text-gray-500 text-sm mt-1">Welcome back to your event dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Engagement"
          value="6,650"
          icon={Users}
          trend="up"
          trendValue="+14%"
          trendLabel="vs last month"
        />
        <MetricCard
          title="Revenue"
          value="$45,231"
          icon={DollarSign}
          trend="up"
          trendValue="+20%"
          trendLabel="vs last month"
        />
        <MetricCard
          title="Tickets Sold"
          value="3,147"
          icon={Ticket}
          trend="down"
          trendValue="-10%"
          trendLabel="vs last month"
        />
        <MetricCard
          title="Event Countdown"
          value="14 Days"
          icon={Calendar}
          trend="up"
          trendValue="+27%"
          trendLabel="engagement rate"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-montserrat">Visit by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-gray-500">
              World Map Visualization Coming Soon
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-montserrat">Social Media Audience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Total Audience</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">20,453</span>
                <span className="text-green-500 text-sm">+1.14%</span>
              </div>
            </div>
            <div className="space-y-3">
              <SocialCard
                platform="Facebook"
                followers={14231}
                trend="up"
                trendValue="+72.08%"
              />
              <SocialCard
                platform="Twitter"
                followers={3207}
                trend="down"
                trendValue="-2.13%"
              />
              <SocialCard
                platform="Instagram"
                followers={1084}
                trend="up"
                trendValue="+20.08%"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}