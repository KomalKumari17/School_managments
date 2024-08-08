const { Card, CardTitle, CardDescription, CardContent } = require("@/components/ui/card")

export const DashboardCard = ({text, count, color}) => {
    return (
        <Card className={`p-2 bg-white text-gray-600 flex-1 bg-${color}-500`}>
            <CardContent className="space-y-2">
            <CardTitle className="text-3xl font-medium">{count}</CardTitle>
            <CardDescription className="text-xl ">{text}</CardDescription>
            </CardContent>
        </Card>
    )
}