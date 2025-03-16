import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { History, X } from 'lucide-react';

// 共通のアイコンサイズクラス
const ICON_SIZE = 'min-w-[clamp(25px,4vw,40px)] min-h-[clamp(25px,3vw,40px)]';

interface MCToggleHistoryButtonProps {
  showHistory: boolean;
  setShowHistory: (showHistory: boolean) => void;
}

export default function MCToggleHistoryButton({
  showHistory,
  setShowHistory,
}: MCToggleHistoryButtonProps) {
  const handleClick = () => {
    setShowHistory(!showHistory);
    setTimeout(() => {}, 500);
  };

  return (
    <Button
      variant="outline"
      className={cn(
        'fixed rounded-full cursor-pointer border right-6 bottom-6 w-[7vw] min-w-[60px] h-[7vw] min-h-[60px]',
        showHistory ? 'border-black' : 'shadow-sm hover:shadow-none'
      )}
      onClick={handleClick}
    >
      {showHistory ? <X className={ICON_SIZE} /> : <History className={ICON_SIZE} />}
    </Button>
  );
}
