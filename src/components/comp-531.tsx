import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../components/ui/timeline"

const items = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Hannah Kandell",
    action: "opened a new issue",
    description:
      "I'm having trouble with the new component library. It's not rendering properly.",
    image: "/images/image.png",
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Chris Tompson",
    action: "commented on",
    description:
      "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
    image: "/images/image.png",
  },
]

export default function Component() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 p-6 rounded-xl shadow-lg">
      <Timeline>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-10"
          >
            <TimelineHeader className="flex items-center">
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <div className="flex items-center space-x-4">
                <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-10 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-8 rounded-full object-cover "
                  />
                </TimelineIndicator>
                <TimelineTitle className="text-xl font-semibold text-gray-700 mt-0">
                  {item.title}{" "}
                  <span className="text-gray-400 font-medium">{item.action}</span>
                </TimelineTitle>
              </div>
            </TimelineHeader>
            <TimelineContent className="text-foreground mt-4 bg-blue-300 rounded-lg border border-blue-100 px-6 py-4 shadow-md">
              <p className="text-gray-800 text-base">{item.description}</p>
              <TimelineDate className="mt-2 text-gray-900 text-sm font-medium">{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
