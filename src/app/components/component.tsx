const cn = (...classes: string[]) => classes.join(" ");

const component = () => {
  return (
    <div
      className={cn(
        "min-h-100 w-full rounded-2xl bg-neutral-100",
        "bg-[radial-gradient(theme(--colors-neutral-400)_1px, transparent_1px)]",
        "[background-size:10px_10px]",
        "group flex flex-col items-center justify-center p-8",
      )}
    >
      <h2
        className={cn(
          "mt-8 mb-2 text-2xl font-bold tracking-tight",
          "text-neutral-800 text-shadow-neutral-300 text-shadow-lg",
        )}
      >
        Easily modify scale with Tailwind
      </h2>

      <p className={cn("max-w-sm mx-auto text-sm text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to bg-neutral-500")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta excepturi inventore veniam aliquam voluptatum illo labore ullam quidem earum ipsum hic incidunt minus quaerat accusantium impedit non, fuga facilis?
      </p>


      <div
        className={cn(
          "size-60 rounded-2xl border border-neutral-200 bg-neutral-100",
          "bg-[radial-gradient(theme(--colors-neutral-300)_1px, transparent_1px)]",
          "[background-size:10px_10px]",
          "relative shadow-2xl perspective-distant",
        )}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1686218921810-5aa724a04601?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="avatar"
          className={cn(
            "transition-transform duration-700",
            "h-full w-full rounded-2xl object-cover",
            "translate-z-20 rotate-x-30 -rotate-y-30 rotate-z-30 transform",
            "group-hover:scale-75 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0",
          )}
        />
      </div>
    </div>
  );
};

export default component;
