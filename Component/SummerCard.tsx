export function SummerCareTips() {
  const tips = [
    {
      title: "Stay Hydrated",
      desc: "Drink at least 8 glasses of water daily.",
      icon: "💧",
    },
    {
      title: "Sun Protection",
      desc: "Apply SPF 50+ sunscreen every 2 hours.",
      icon: "☀️",
    },
    {
      title: "Cooling Mist",
      desc: "Keep a facial mist handy for instant freshness.",
      icon: "🌬️",
    },
  ];

  return (
    <section className="my-16 bg-blue-50 p-10 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Summer Care Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span className="text-3xl">{tip.icon}</span>
            <div>
              <h3 className="font-bold">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
