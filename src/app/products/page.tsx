import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Products from "./_components/products";
import Sidebar from "./_components/sidebar";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0">
      <div className="block lg:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="1" title="Section 1">
            <AccordionTrigger>Filters</AccordionTrigger>
            <AccordionContent>
              <Sidebar />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="hidden lg:block w-[20%]">
        <Sidebar />
      </div>
      <Products />
    </main>
  );
}
