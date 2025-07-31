import { Card, CardContent } from "./ui/card";

import { motion } from "framer-motion";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 1, 1] // cubic-bezier for easeOut
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <CardContent className="p-0">
                  <motion.p
                    className="text-lg mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    I'm a full-stack developer with over 3 years of experience building web applications.
                    I specialize in React, Node.js, and modern web technologies. I'm passionate about
                    creating user-friendly interfaces and scalable backend systems.
                  </motion.p>

                  <motion.p
                    className="text-lg mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    When I'm not coding, you can find me exploring new technologies, contributing to
                    open-source projects, or enjoying outdoor activities. I believe in continuous
                    learning and staying up-to-date with the latest industry trends.
                  </motion.p>

                  <motion.div
                    className="grid sm:grid-cols-2 gap-4"
                    variants={itemVariants}
                  >
                    {[
                      { label: "Location", value: "San Francisco, CA" },
                      { label: "Education", value: "BS Computer Science" },
                      { label: "Experience", value: "3+ Years" },
                      { label: "Specialization", value: "Full-Stack Development" }
                    ].map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-medium mb-2">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Profile image removed as requested */}
        </div>
      </div>
    </section>
  );
}