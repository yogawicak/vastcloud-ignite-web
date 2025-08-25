import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Container, 
  Layers, 
  Zap, 
  Code, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  HardDrive,
  Network,
  GitBranch,
  Database,
  Monitor,
  Rocket
} from 'lucide-react';

const Vastpod = () => {
  const containerBenefits = [
    {
      title: "Lightweight Deployment",
      description: "Deploy aplikasi 10x lebih cepat dibanding traditional hosting dengan container technology",
      icon: Zap
    },
    {
      title: "Auto Scalable",
      description: "Horizontal dan vertical scaling otomatis berdasarkan traffic dan resource usage",
      icon: Layers
    },
    {
      title: "Portable Applications",
      description: "Run anywhere dengan consistency - dari development hingga production environment",
      icon: Container
    },
    {
      title: "DevOps Ready",
      description: "Built-in CI/CD pipeline integration dengan Git workflow dan automated deployment",
      icon: GitBranch
    },
    {
      title: "Cost Effective",
      description: "Pay hanya untuk resources yang digunakan dengan billing per-second accuracy",
      icon: Cpu
    },
    {
      title: "Developer Friendly",
      description: "Simple configuration, instant logs, dan monitoring tools untuk developer experience terbaik",
      icon: Code
    }
  ];

  const plans = [
    {
      name: "MICRO POD",
      price: "35.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "0.5 GB RAM",
        cpu: "0.5 CPU",
        storage: "10 GB Storage",
        containers: "1 Container",
        monitoring: "Basic monitoring"
      },
      features: [
        "Docker Container Support",
        "Basic Resource Monitoring",
        "Environment Variables",
        "Custom Domains",
        "SSL Certificate",
        "Email Support"
      ]
    },
    {
      name: "SMALL POD", 
      price: "65.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "1 GB RAM",
        cpu: "1 CPU",
        storage: "25 GB Storage",
        containers: "3 Containers",
        monitoring: "Advanced monitoring"
      },
      features: [
        "Semua fitur Micro",
        "Multi-container Support",
        "Advanced Monitoring",
        "Real-time Logs",
        "Database Connections",
        "API Rate Limiting"
      ]
    },
    {
      name: "MEDIUM POD",
      price: "125.000", 
      period: "/bulan",
      popular: true,
      specs: {
        ram: "2 GB RAM",
        cpu: "2 CPU",
        storage: "50 GB Storage",
        containers: "10 Containers",
        monitoring: "Load balancing"
      },
      features: [
        "Semua fitur Small",
        "Load Balancing",
        "Auto-scaling",
        "Redis/Memcached",
        "Priority Support",
        "Custom Health Checks"
      ]
    },
    {
      name: "LARGE POD",
      price: "235.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "4 GB RAM", 
        cpu: "4 CPU",
        storage: "100 GB Storage",
        containers: "25 Containers",
        monitoring: "Custom domains"
      },
      features: [
        "Semua fitur Medium",
        "Microservices Architecture",
        "Private Networking",
        "Advanced Security",
        "24/7 Support",
        "Migration Assistance"
      ]
    }
  ];

  const supportedFrameworks = [
    {
      category: "Backend Frameworks",
      technologies: [
        { name: "Node.js", description: "Express, Nest.js, Fastify" },
        { name: "Python", description: "Django, Flask, FastAPI" },
        { name: "PHP", description: "Laravel, Symfony, CodeIgniter" },
        { name: "Ruby", description: "Rails, Sinatra, Hanami" }
      ]
    },
    {
      category: "Frontend & Static", 
      technologies: [
        { name: "React", description: "Next.js, Gatsby, CRA" },
        { name: "Vue.js", description: "Nuxt.js, Quasar, Vite" },
        { name: "Angular", description: "Angular CLI, Ionic" },
        { name: "Static Sites", description: "HTML, Jekyll, Hugo" }
      ]
    },
    {
      category: "Databases & Services",
      technologies: [
        { name: "MySQL", description: "MariaDB, Percona" },
        { name: "PostgreSQL", description: "PostGIS extensions" },
        { name: "MongoDB", description: "Document database" },
        { name: "Redis", description: "Cache & sessions" }
      ]
    }
  ];

  const devFeatures = [
    {
      title: "Git-based Deployments",
      description: "Push code ke Git repository dan otomatis deploy ke production environment",
      icon: GitBranch
    },
    {
      title: "Environment Management", 
      description: "Kelola environment variables dengan secure encryption dan easy configuration",
      icon: Code
    },
    {
      title: "Custom Domains & SSL",
      description: "Connect custom domain dengan automatic SSL certificate provisioning",
      icon: Globe
    },
    {
      title: "Database Connections",
      description: "Built-in support untuk MySQL, PostgreSQL, MongoDB, dan Redis connections",
      icon: Database
    },
    {
      title: "Real-time Logs & Metrics",
      description: "Monitor aplikasi dengan real-time logs, metrics, dan performance insights",
      icon: Monitor
    },
    {
      title: "Scaling Controls",
      description: "Manual atau auto-scaling controls dengan resource usage optimization",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              VASTPOD: Container Hosting untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Era Modern
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Deploy aplikasi containerized dengan mudah. Kubernetes-ready, auto-scaling, dan developer-friendly untuk aplikasi cloud-native.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: "Docker Ready", icon: Container },
                { label: "Auto-scaling", icon: Zap },
                { label: "Git Deploy", icon: GitBranch },
                { label: "Real-time Logs", icon: Monitor }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                  <div className="font-medium">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Container Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan Container Hosting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern application deployment dengan teknologi container untuk efisiensi dan skalabilitas maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {containerBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-primary rounded-xl w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket VASTPOD Container</h2>
            <p className="text-xl text-muted-foreground">
              Fleksibilitas container dengan pricing yang transparan dan scalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-soft transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Rp {plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>RAM:</span>
                        <span className="font-medium">{plan.specs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CPU:</span>
                        <span className="font-medium">{plan.specs.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span className="font-medium">{plan.specs.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Containers:</span>
                        <span className="font-medium">{plan.specs.containers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Deploy Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknologi yang Didukung</h2>
            <p className="text-xl text-muted-foreground">
              Support lengkap untuk berbagai framework dan teknologi modern
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportedFrameworks.map((category, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg">{tech.name}</h3>
                        <p className="text-muted-foreground text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer Experience Terbaik</h2>
            <p className="text-xl text-muted-foreground">
              Tools dan fitur yang dirancang khusus untuk workflow developer modern
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Deploy Aplikasi dalam 3 Langkah Mudah
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              From zero to production dalam hitungan menit dengan VASTPOD container hosting
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  step: "1", 
                  title: "Connect Repository", 
                  desc: "Connect Git repository atau upload Docker container image" 
                },
                { 
                  step: "2", 
                  title: "Configure Environment", 
                  desc: "Set environment variables, domains, dan resource allocation" 
                },
                { 
                  step: "3", 
                  title: "Deploy & Scale", 
                  desc: "Deploy instantly dan scale otomatis berdasarkan traffic" 
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 mt-8">
              Start Container Hosting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vastpod;