export const MenuItem = ({ title, className, children }) => (
  <div className="space-y-2">
    <div className={`w-full mx-auto aspect-square rounded-[10px] text-white ${className}`}>
      <div className="w-full h-full flex items-center justify-center p-1">
        {children}
      </div>
    </div>
    <p className="text-center text-xs">{title}</p>
  </div>
)