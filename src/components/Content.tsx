import { SkipNavContent } from "@reach/skip-nav";

export default function Content({ children }) {
  return (
    <SkipNavContent>
      {children}
    </SkipNavContent>
  )
}
