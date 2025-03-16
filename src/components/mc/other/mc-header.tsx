import { cn } from "@/lib/utils";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className={
      cn(
        "h-[50px] bg-[#e07594]",
        children && 'fixed inset-x-0 top-0 z-10 w-full text-center'
      )}>
      {children && (
        <span className="font-black text-white leading-[50px] text-xl">{children}</span>
      )}
    </ div>
  )
}