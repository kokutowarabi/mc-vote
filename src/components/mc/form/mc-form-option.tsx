import { cn } from "@/lib/utils";
import MCFormOptionFloatingName from "@/components/mc/form/mc-form-option-floating-name";
import { useState } from "react";

interface MCFormOptionProps {
  program: Program;
  handleProgramSelect: (program: Program) => void;
  selectedPrograms: { id: string; title: string; department: string }[];
}

export default function MCFormOption({
  program,
  handleProgramSelect,
  selectedPrograms,
}: MCFormOptionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedPrograms.some((p) => p.id === program.id);

  return (
    <div
      className={cn(
        'p-2 border-2 rounded-md cursor-pointer transition duration-75',
        isSelected ? "bg-primary/20 border-gray-500" : "hover:bg-primary/5 border-transparent",
      )}
      onClick={() => handleProgramSelect(program)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MCFormOptionFloatingName
        program={program}
        shouldAnimate={isHovered || isSelected}
      />
      <div className="text-sm text-muted-foreground line-clamp-2">
        {program.detail}
      </div>
      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
        {program.department} | {program.place} | {program.genre}
      </div>
    </div >
  );
}