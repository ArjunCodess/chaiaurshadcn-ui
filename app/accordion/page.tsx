import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        key: 1,
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards such as Visa, Mastercard, American Express, and Discover. Additionally, we also accept PayPal."
    },
    {
        key: 2,
        question: "What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase for a full refund. Please note that items must be unused and in their original packaging."
    },
    {
        key: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination."
    },
    {
        key: 4,
        question: "How can I track my order?",
        answer: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package."
    },
    {
        key: 5,
        question: "What if I receive a damaged or defective item?",
        answer: "If you receive a damaged or defective item, please contact our customer support team immediately. We will arrange for a replacement or refund as soon as possible."
    }
]

export default function page() {
    return (
        <main className="flex justify-center items-center">
            <div className="w-[50%] p-4">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map(faq => (
                        <AccordionItem value={`item-${faq.key}`} key={faq.key}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </main>
    )
}  