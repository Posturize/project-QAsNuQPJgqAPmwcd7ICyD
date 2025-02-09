import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground text-center py-20">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
      <Button variant="secondary" size="lg">Sign Up Now</Button>
    </section>
  );
}