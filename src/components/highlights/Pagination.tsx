interface PaginationProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

const Pagination = ({ total, active, onSelect }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === active 
              ? "bg-fashionista-pink w-4" 
              : "bg-fashionista-grey/40 hover:bg-fashionista-grey/60"
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Pagination;