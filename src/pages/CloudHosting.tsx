import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  Cpu, 
  Server, 
  Network, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Zap,
  HardDrive,
  Monitor,
  Settings,
  Lock,
  TrendingUp,
  Cloud
} from 'lucide-react';

const CloudHosting = () => {
  const plans = [
    {
      name: "STARTER CLOUD",
      price: "45.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "2 GB RAM",
        cpu: "2 CPU Cores", 
        storage: "25 GB SSD Storage",
        websites: "5 Websites",
        bandwidth: "Unlimited Bandwidth",
        ssl: "Free SSL & Backup"
      },
      features: [
        "cPanel Control Panel",
        "Auto Scaling",
        "Global CDN",
        "Daily Backup",
        "99.99% Uptime SLA",
        "Email Support"
      ]
    },
    {
      name: "BUSINESS CLOUD", 
      price: "95.000",
      period: "/bulan",
      popular: true,
      specs: {
        ram: "4 GB RAM",
        cpu: "4 CPU Cores",
        storage: "50 GB SSD Storage", 
        websites: "15 Websites",
        bandwidth: "Unlimited Bandwidth",
        ssl: "Priority Support"
      },
      features: [
        "Semua fitur Starter",
        "HTTP/2 & PHP 8.x",
        "Redis Caching", 
        "Malware Scanning",
        "Priority Support",
        "White-label DNS"
      ]
    },
    {
      name: "ENTERPRISE CLOUD",
      price: "185.000", 
      period: "/bulan",
      popular: false,
      specs: {
        ram: "8 GB RAM",
        cpu: "6 CPU Cores",
        storage: "100 GB SSD Storage",
        websites: "Unlimited Websites",
        bandwidth: "Dedicated IP", 
        ssl: "White-label option"
      },
      features: [
        "Semua fitur Business",
        "Dedicated Resources",
        "Custom PHP Config",
        "Advanced Monitoring",
        "24/7 Phone Support",
        "Migration Assistance"
      ]
    }
  ];

  const features = [
    {
      title: "Multi-Cloud Infrastructure",
      description: "Infrastruktur dengan redundancy di multiple data center untuk availability maksimal",
      icon: Cloud
    },
    {
      title: "cPanel Control Panel",
      description: "Interface yang familiar dengan Softaculous dan tools developer lengkap",
      icon: Server
    },
    {
      title: "SSD NVMe Performance",
      description: "Storage tercepat dengan performa hingga 6x lebih cepat dari SSD biasa",
      icon: Zap
    },
    {
      title: "Auto Scaling",
      description: "Resource otomatis menyesuaikan traffic tanpa downtime atau konfigurasi manual",
      icon: TrendingUp
    },
    {
      title: "Enterprise Security",
      description: "CloudFlare integration, DDoS protection, dan malware scanning otomatis",
      icon: Shield
    },
    {
      title: "Global CDN",
      description: "Content delivery network dengan 200+ edge locations di seluruh dunia", 
      icon: Globe
    }
  ];

  const techSpecs = [
    { label: "Web Server", value: "LiteSpeed + Apache", icon: Server },
    { label: "PHP Version", value: "8.0, 8.1, 8.2, 8.3", icon: Cpu },
    { label: "Database", value: "MySQL 8.0 / MariaDB", icon: HardDrive },
    { label: "SSL Certificate", value: "Let's Encrypt Auto SSL", icon: Lock },
    { label: "Backup Frequency", value: "Daily + On-demand", icon: Shield },
    { label: "Monitoring", value: "Real-time 24/7", icon: Monitor }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Cloud Hosting Handal dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Performa Maksimal
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Dapatkan fleksibilitas cloud dengan kemudahan cPanel. Auto-scaling, SSD storage, dan uptime 99.99% untuk website yang selalu online.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: "Flexible Resources", icon: Zap },
                { label: "cPanel Control", icon: Server },
                { label: "Auto Scaling", icon: TrendingUp },
                { label: "Global CDN", icon: Globe }
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

      {/* Features Deep Dive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknologi Cloud Terdepan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Infrastruktur modern yang dirancang untuk performa, keamanan, dan skalabilitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-primary rounded-xl w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pilih Paket Cloud Hosting</h2>
            <p className="text-xl text-muted-foreground">
              Paket yang fleksibel untuk segala kebutuhan, dari startup hingga enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-soft transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Rp {plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Spesifikasi</h4>
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
                        <span>Websites:</span>
                        <span className="font-medium">{plan.specs.websites}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Fitur Termasuk</h4>
                    <div className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Pilih Paket Ini
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Spesifikasi Teknis</h2>
            <p className="text-xl text-muted-foreground">
              Detail teknologi yang mendukung performa optimal hosting Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <spec.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{spec.label}</h3>
                  <p className="text-muted-foreground">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Service */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Migrasi Gratis dari Hosting Lama
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tim expert kami akan membantu memindahkan website Anda tanpa biaya dan tanpa downtime
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { step: "1", title: "Analisis Website", desc: "Tim kami menganalisis struktur website dan database Anda" },
                { step: "2", title: "Migrasi Data", desc: "Transfer file dan database dilakukan dengan aman dan cepat" },
                { step: "3", title: "Testing & Go Live", desc: "Verifikasi semua fungsi bekerja sempurna sebelum live" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 mt-8">
              Mulai Migrasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;