import { useServices } from "@/hooks/use-gym-data";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Loader2 } from "lucide-react";

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Services" 
        subtitle="From personal training to high-intensity group classes, we have everything you need to crush your goals."
        image="/images/cardio.jpg"
      />

      <section className="py-24 container px-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading programs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-destructive/10 rounded-2xl border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-2">Failed to load services</h3>
            <p className="text-muted-foreground">Please try refreshing the page.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>

            {(!services || services.length === 0) && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No services available at the moment.</p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Special Offer Banner */}
      <section className="bg-secondary border-y border-border py-16">
        <div className="container px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Not sure where to start?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free 30-minute consultation with one of our expert trainers. We'll assess your fitness level and recommend the perfect plan for you.
          </p>
          <a href="/contact" className="inline-block bg-primary text-white font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
