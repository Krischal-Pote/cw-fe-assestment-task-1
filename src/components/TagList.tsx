import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
}

export function TagList({ title, tags }: TagListProps) {
  const handleBadgeClick = (tag: string) => {
    alert(`You clicked on tag: "${tag}"`);
  };

  const handleBadgeKeyPress = (e: any, tag: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBadgeClick(tag);
    }
  };

  return (
    <section className="mt-10 px-6 max-w-5xl mx-auto">
      <h2 className="text-lg text-white font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => handleBadgeClick(tag)}
            onKeyDown={(e) => handleBadgeKeyPress(e, tag)}
            className="
              bg-[#283038] 
              text-[#95A2AF] 
              hover:bg-[#3A4B56] 
              hover:text-white 
              hover:shadow-md
              hover:scale-105
              active:scale-95
              active:bg-[#1F2937]
              cursor-pointer 
              pt-2 pb-2 pl-4 pr-4 
              rounded-[var(--radius)]
              transition-all 
              duration-200 
              transform
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-opacity-50
            "
            tabIndex={0}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}