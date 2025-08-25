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
  Lock
} from 'lucide-react';

const VpsHosting = () => {
  const vpsAdvantages = [
    {
      title: "Full Root Access",
      description: "Install aplikasi apapun, konfigurasi server sesuai kebutuhan dengan akses root penuh",
      icon: Terminal
    },
    {
      title: "Guaranteed Resources",
      description: "RAM dan CPU dedicated yang tidak dibagi dengan user lain untuk performa konsisten",
      icon: Cpu
    },
    {
      title: "Multiple OS Options",
      description: "Pilih OS favorit: CentOS, Ubuntu, Debian, AlmaLinux, atau Windows Server",
      icon: Server
    },
    {
      title: "Instant Scalability",
      description: "Upgrade resources (RAM, CPU, Storage) kapan saja tanpa downtime",
      icon: Zap
    },
    {
      title: "Multiple IP Addresses",
      description: "Public dan Private IP included untuk kebutuhan hosting multiple aplikasi",
      icon: Network
    },
    {
      title: "Enterprise Security",
      description: "DDoS protection, firewall configuration, dan security monitoring 24/7",
      icon: Shield
    }
  ];

  const plans = [
    {
      name: "VPS BASIC",
      price: "75.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "1 GB RAM",
        cpu: "1 CPU Core",
        storage: "25 GB SSD",
        ip: "1 IP Public",
        os: "Ubuntu/CentOS"
      },
      features: [
        "Full Root Access",
        "KVM Virtualization",
        "99.9% Uptime SLA",
        "Basic Monitoring",
        "Email Support",
        "Free OS Templates"
      ]
    },
    {
      name: "VPS STANDARD", 
      price: "135.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "2 GB RAM",
        cpu: "2 CPU Cores",
        storage: "50 GB SSD",
        ip: "1 Public + 1 Private IP",
        os: "Control Panel Options"
      },
      features: [
        "Semua fitur Basic",
        "cPanel/DirectAdmin Available",
        "Weekly Backup",
        "SSH Key Management",
        "Priority Support",
        "Resource Monitoring"
      ]
    },
    {
      name: "VPS ADVANCED",
      price: "245.000",
      period: "/bulan", 
      popular: true,
      specs: {
        ram: "4 GB RAM",
        cpu: "4 CPU Cores",
        storage: "100 GB SSD",
        ip: "2 Public + 2 Private IP",
        os: "Free Managed Service"
      },
      features: [
        "Semua fitur Standard",
        "Free Managed Service",
        "Daily Backup",
        "Load Balancer Ready",
        "24/7 Phone Support",
        "Migration Assistance"
      ]
    },
    {
      name: "VPS PRO",
      price: "425.000", 
      period: "/bulan",
      popular: false,
      specs: {
        ram: "8 GB RAM",
        cpu: "6 CPU Cores",
        storage: "200 GB SSD",
        ip: "4 Public + 4 Private IP",
        os: "Priority Support"
      },
      features: [
        "Semua fitur Advanced",
        "Dedicated CPU Cores",
        "NVMe SSD Storage",
        "Custom Firewall Rules",
        "Priority Support Queue",
        "Performance Optimization"
      ]
    },
    {
      name: "VPS ENTERPRISE",
      price: "745.000",
      period: "/bulan",
      popular: false,
      specs: {
        ram: "16 GB RAM", 
        cpu: "8 CPU Cores",
        storage: "400 GB SSD",
        ip: "8 Public + 8 Private IP",
        os: "Dedicated Account Manager"
      },
      features: [
        "Semua fitur Pro",
        "Dedicated Account Manager",
        "Custom Resource Allocation",
        "Enterprise SLA",
        "White-glove Support",
        "Architecture Consultation"
      ]
    }
  ];

  const techDetails = [
    {
      title: "Jakarta Data Center",
      description: "Tier-3 certified dengan redundant power dan cooling system",
      icon: Globe
    },
    {
      title: "1 Gbps Network Port", 
      description: "Koneksi super cepat dengan 99.9% uptime SLA guarantee",
      icon: Network
    },
    {
      title: "Enterprise SSD Storage",
      description: "NVMe SSD dengan RAID protection untuk data integrity",
      icon: HardDrive
    },
    {
      title: "Automated Backup",
      description: "Weekly backup otomatis dengan instant restore capability",
      icon: Shield
    },
    {
      title: "24/7 Infrastructure Monitoring",
      description: "Real-time monitoring dengan proactive issue resolution",
      icon: Monitor
    },
    {
      title: "DDoS Protection",
      description: "Advanced DDoS mitigation hingga 10 Gbps attack protection",
      icon: Lock
    }
  ];

  const managementOptions = [
    {
      title: "Unmanaged VPS",
      description: "Full control untuk advanced users dan system administrators",
      icon: Terminal,
      features: [
        "Complete root access",
        "Self-managed server",
        "OS-level control",
        "Custom software installation",
        "Advanced user recommended"
      ],
      price: "Standard pricing"
    },
    {
      title: "Semi-Managed VPS",
      description: "OS updates dan basic support untuk user intermediate",
      icon: Settings,
      features: [
        "OS security updates",
        "Basic server monitoring", 
        "Reboot assistance",
        "Initial server setup",
        "Email & ticket support"
      ],
      price: "+Rp 50.000/bulan"
    },
    {
      title: "Fully Managed VPS",
      description: "Complete server management untuk focus ke bisnis Anda",
      icon: Shield,
      features: [
        "Complete server management",
        "Security patches & updates",
        "Performance optimization",
        "Backup management",
        "24/7 priority support"
      ],
      price: "+Rp 150.000/bulan"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              VPS Hosting: Kontrol Penuh,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Performa Maksimal
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Dapatkan dedicated resources dengan fleksibilitas cloud dan akses root penuh. Perfect untuk aplikasi kompleks dan high-traffic websites.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: "Root Access", icon: Terminal },
                { label: "KVM Virtualization", icon: Server },
                { label: "SSD Storage", icon: HardDrive },
                { label: "DDoS Protection", icon: Shield }
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

      {/* VPS Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan VPS Hosting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Power dan fleksibilitas dedicated server dengan cost-efficiency cloud hosting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vpsAdvantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-primary rounded-xl w-fit mb-4">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {advantage.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket VPS Hosting</h2>
            <p className="text-xl text-muted-foreground">
              Dari developer hingga enterprise, tersedia paket VPS untuk semua kebutuhan
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-soft transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">Rp {plan.price}</span>
                    <span className="text-muted-foreground text-sm block">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="space-y-2 text-xs">
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
                        <span>IP:</span>
                        <span className="font-medium">{plan.specs.ip}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="sm"
                  >
                    Pilih VPS
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastruktur Enterprise</h2>
            <p className="text-xl text-muted-foreground">
              Teknologi terdepan untuk performa dan reliability maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techDetails.map((detail, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <detail.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground text-sm">{detail.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Management Options</h2>
            <p className="text-xl text-muted-foreground">
              Pilih level management yang sesuai dengan keahlian dan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {managementOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-secondary rounded-xl w-fit mb-4">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {option.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="outline" className="text-sm">
                      {option.price}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Global Data Centers Network
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Pilih lokasi server terdekat untuk latensi minimal dan performa optimal
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  location: "Jakarta, Indonesia", 
                  latency: "< 5ms", 
                  desc: "Perfect untuk user Indonesia dan Asia Tenggara" 
                },
                { 
                  location: "Singapore", 
                  latency: "< 15ms", 
                  desc: "Optimal untuk global reach dan Asia Pacific" 
                },
                { 
                  location: "US West Coast", 
                  latency: "< 10ms", 
                  desc: "Ideal untuk Amerika dan global applications" 
                }
              ].map((datacenter, index) => (
                <div key={index} className="text-center p-6 bg-slate-800 rounded-xl">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{datacenter.location}</h3>
                  <Badge className="bg-gradient-primary mb-3">{datacenter.latency} latency</Badge>
                  <p className="text-slate-400 text-sm">{datacenter.desc}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 mt-8">
              Mulai VPS Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VpsHosting;