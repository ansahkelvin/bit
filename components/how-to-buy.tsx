import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Create a account",
    image: "/my_app.svg",
  },
  {
    id: 2,
    title: "Verify KYC and Add payment method",
    image: "/cc.svg",
  },
  {
    id: 3,
    title: "Funds account",
    image: "/credit.svg",
  },
];

export default function HowToBuy() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          How to Buy
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#212741] rounded-2xl p-6 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="mb-6 w-24 h-24 flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Rule - Full width */}
      <hr className="mt-12 border-t border-[#212741]" />
    </section>
  );
}
