type SectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

interface Props extends SectionProps {}

export function Section({ children, className, ...props }: Props) {
  // JavaScript Part

  // Render Part
  return (
    <section
      className={`h-screen flex justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
