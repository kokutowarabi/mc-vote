'use client'

import { programData } from "@/data/program-data"
import MCFormOption from "./mc-form-option"
import { useState } from "react";
import Image from "next/image";

export default function MCForm() {
  const [selectedPrograms, setSelectedPrograms] = useState<{ id: string; title: string, department: string }[]>([]);

  const handleProgramSelect = (program: {
    id: string;
    title: string;
    department: string;
  }) => {
    setSelectedPrograms((prev) =>
      prev.some((p) => p.id === program.id)
        ? prev.filter((p) => p.id !== program.id)
        : [...prev, program]
    );
  };

  return (
    <form className="bg-[#fbe7e5] rounded-lg overflow-hidden w-full sm:max-w-[576px] h-[calc(100svh-50px)] sm:max-h-[675px] p-8">
      <div className="flex gap-2 mb-2 items-center">
        {/* <MCFormFilter
          departments={departments}
          filters={filters}
          updateFilter={updateFilter}
          resetFilter={resetFilter}
        />
        <MCFormSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        <Image
          src="/mc/logo.svg"
          alt="ロゴ"
          width={50}
          height={50}
          className="lg:hidden pointer-events-none"
        />
      </div>
      <div className="bg-white border custom-scrollbar h-full overflow-y-auto rounded-md pl-3 py-3 space-y-2">
        {programData.map((program) => (
          <MCFormOption
            key={program.id}
            program={program}
            handleProgramSelect={handleProgramSelect}
            selectedPrograms={selectedPrograms}
          />
        ))}
      </div>
    </form>
  )
}
