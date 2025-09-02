export default function Feature() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">
        Waarom kiezen voor de Smart Pet Camera Ball?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-3">📸 HD Camera</h3>
          <p className="text-gray-600">
            Bekijk je huisdier overal ter wereld in haarscherpe kwaliteit.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-3">🎮 Interactief</h3>
          <p className="text-gray-600">
            Speel met je huisdier op afstand via de app en hou ze actief.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-3">🔋 Lange batterijduur</h3>
          <p className="text-gray-600">
            Tot 12 uur speeltijd zonder opladen, ideaal voor lange dagen.
          </p>
        </div>
      </div>
    </section>
  );
}
