import { motion } from "motion/react";
import { Sparkles, Quote, Lightbulb, ArrowRight, Star, Cloud, Rainbow, Wand2, FileUp, Heart, PartyPopper } from "lucide-react";

export default function Design5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9E6] to-[#FFE4EC] text-[#2D2D2D] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-yellow-400"
        >
          <Star size={40} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-40 right-20 text-pink-400"
        >
          <Cloud size={50} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/4 text-purple-400"
        >
          <Rainbow size={60} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-1/2 right-10 text-blue-300"
        >
          <Wand2 size={30} />
        </motion.div>
      </div>

      <header className="relative z-10 py-6 px-8 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold">R</span>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Ratio
          </span>
        </motion.div>
        <nav className="hidden md:flex gap-6 font-medium">
          {['Features', 'How It Works', 'Pricing'].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-pink-500 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
        >
          Try Free
        </motion.button>
      </header>

      <section className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md text-sm font-bold text-pink-500 mb-8">
                <Star size={16} fill="currentColor" /> Magic PDF Reader <Star size={16} fill="currentColor" />
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Reading made{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                delightful
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Turn overwhelming PDFs into fun, easy-to-read insights! 
              Get summaries, quotes, and hints that make learning a joy.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 mx-auto sm:mx-0 shadow-lg hover:shadow-xl"
              >
                <FileUp size={20} />
                Upload PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-700 px-10 py-5 rounded-full font-bold text-lg shadow-md hover:shadow-lg"
              >
                See Magic
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-[40px] blur-2xl opacity-30" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-2xl">
              <div className="flex gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-4 h-4 rounded-full bg-pink-500"
                />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-purple-500" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Sparkles, color: "bg-yellow-100", title: "Summary", desc: "Quick overview of your doc" },
                  { icon: Quote, color: "bg-pink-100", title: "Quotes", desc: "Best passages highlighted" },
                  { icon: Lightbulb, color: "bg-purple-100", title: "Hints", desc: "Tips to understand better" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`${item.color} p-6 rounded-2xl`}
                  >
                    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <item.icon className="text-gray-700" size={24} />
                    </div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why you'll <span className="text-pink-500">love</span> it
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: PartyPopper, emoji: "🎉", title: "Fun & Easy", desc: "No more boring reading" },
              { icon: Star, emoji: "⭐", title: "Super Fast", desc: "Results in seconds" },
              { icon: Heart, emoji: "💖", title: "Helpful", desc: "Guides you along the way" },
              { icon: Wand2, emoji: "✨", title: "Magical", desc: "Feels like real magic" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[24px] shadow-lg text-center"
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                  className="text-5xl mb-4"
                >
                  {feature.emoji}
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-[40px] p-12 text-white text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -right-10 -top-10 text-white/20"
            >
              <Star size={100} fill="currentColor" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">
              Ready for some magic?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-md mx-auto relative z-10">
              Join thousands of happy readers who've discovered a better way to understand documents.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-500 px-12 py-5 rounded-full font-bold text-lg shadow-lg relative z-10 inline-flex items-center gap-2"
            >
              Start Free Trial <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-bold">Ratio</span>
          </div>
          <p className="text-gray-500 text-sm">Made with 💖 for readers everywhere</p>
        </div>
      </footer>
    </div>
  );
}
