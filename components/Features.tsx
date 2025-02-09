export default function Features() {
  const features = [
    { title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools' },
    { title: 'Powerful Analytics', description: 'Gain insights with our advanced analytics' },
    { title: '24/7 Support', description: 'Our team is always here to help you' },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}