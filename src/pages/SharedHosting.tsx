import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Users, 
  Building, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Mail,
  Server,
  Shield,
  HardDrive,
  Headphones
} from 'lucide-react';

const SharedHosting = () => {
  const targetAudience = [
    {
      title: "Personal",
      description: "Blog pribadi, portfolio, atau website pernikahan dengan traffic ringan",
      icon: User,
      examples: ["Blog WordPress", "Portfolio Designer", "Wedding Website", "CV Online"]
    },
    {
      title: "Small Business", 
      description: "Company profile dan toko online kecil dengan kebutuhan dasar",
      icon: Building,
      examples: ["Company Profile", "Toko Online", "Landing Page", "Katalog Produk"]
    },
    {
      title: "Developers",
      description: "Development environment dan testing untuk project baru",
      icon: Code,
      examples: ["Staging Site", "Demo Project", "Learning Platform", "API Testing"]
    }
  ];

  const plans = [
    {
      name: "PERSONAL",
      price: "15.000",
      period: "/bulan", 
      popular: false,
      specs: {
        websites: "1 Website",
        storage: "2 GB Storage",
        bandwidth: "Unlimited Bandwidth",
        email: "1 Email Account",
        ssl: "SSL Gratis"
      },
      features: [
        "Website Builder",
        "WordPress Toolkit",
        "cPanel Access",
        "24/7 Monitoring",
        "Free Migration",
        "30-day Money Back"
      ]
    },
    {
      name: "STARTER",
      price: "25.000", 
      period: "/bulan",
      popular: false,
      specs: {
        websites: "3 Websites",
        storage: "5 GB Storage",
        bandwidth: "Unlimited Bandwidth",
        email: "5 Email Accounts", 
        ssl: "cPanel Access"
      },
      features: [
        "Semua fitur Personal",
        "Subdomain Unlimited",
        "FTP Accounts",
        "File Manager",
        "One-Click Apps",
        "Basic Support"
      ]
    },
    {
      name: "BUSINESS",
      price: "45.000",
      period: "/bulan",
      popular: true,
      specs: {
        websites: "10 Websites",
        storage: "15 GB Storage", 
        bandwidth: "Unlimited Bandwidth",
        email: "25 Email Accounts",
        ssl: "Daily Backup"
      },
      features: [
        "Semua fitur Starter", 
        "Daily Automatic Backup",
        "Priority Support",
        "Advanced Security",
        "Performance Cache",
        "Resource Monitoring"
      ]
    },
    {
      name: "PROFESSIONAL",
      price: "75.000",
      period: "/bulan",
      popular: false,
      specs: {
        websites: "Unlimited Websites",
        storage: "50 GB Storage",
        bandwidth: "Unlimited Bandwidth", 
        email: "100 Email Accounts",
        ssl: "Priority Support"
      },
      features: [
        "Semua fitur Business",
        "SSH Access",
        "Git Integration", 
        "Staging Environment",
        "White Label DNS",
        "Dedicated IP (Optional)"
      ]
    }
  ];

  const includedFeatures = [
    {
      title: "cPanel Control Panel",
      description: "Interface yang user-friendly untuk mengelola website, email, dan database dengan mudah",
      icon: Server
    },
    {
      title: "WordPress Toolkit", 
      description: "Tools khusus untuk installasi, update, dan maintenance WordPress secara otomatis",
      icon: Code
    },
    {
      title: "Website Builder",
      description: "Drag & drop website builder untuk membuat website tanpa coding",
      icon: Globe
    },
    {
      title: "Free Migration",
      description: "Tim ahli membantu migrasi website dari hosting lama secara gratis",
      icon: ArrowRight
    },
    {
      title: "Email Hosting",
      description: "Email profesional dengan domain sendiri plus webmail access", 
      icon: Mail
    },
    {
      title: "Security & Backup",
      description: "SSL certificate gratis, malware protection, dan backup otomatis",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Shared Hosting Terpercaya untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Semua Kebutuhan
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Mulai journey online Anda dengan hosting berkualitas tinggi dan harga terjangkau. Perfect untuk pemula hingga bisnis kecil.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: "cPanel Included", icon: Server },
                { label: "Free SSL", icon: Shield },
                { label: "WordPress Ready", icon: Code },
                { label: "24/7 Support", icon: Headphones }
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

      {/* Target Audience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cocok untuk Berbagai Kebutuhan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dari website personal hingga bisnis kecil, shared hosting kami siap mendukung project Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-xl w-fit">
                    <audience.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {audience.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Contoh Penggunaan:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {audience.examples.map((example, eIndex) => (
                        <Badge key={eIndex} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Shared Hosting</h2>
            <p className="text-xl text-muted-foreground">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda
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
                        <span>Websites:</span>
                        <span className="font-medium">{plan.specs.websites}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span className="font-medium">{plan.specs.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bandwidth:</span>
                        <span className="font-medium">{plan.specs.bandwidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{plan.specs.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Pilih Paket
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semua yang Anda Butuhkan</h2>
            <p className="text-xl text-muted-foreground">
              Fitur lengkap untuk membangun dan mengelola website dengan mudah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="p-3 bg-gradient-secondary rounded-xl w-fit mb-4">
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

      {/* Money Back Guarantee */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Garansi 30 Hari Uang Kembali
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tidak puas dengan layanan kami? Dapatkan 100% uang kembali dalam 30 hari tanpa ribet dan tanpa pertanyaan berbelit.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "No Risk", desc: "Coba hosting kami tanpa risiko finansial apapun" },
                { title: "Easy Process", desc: "Proses refund mudah melalui support ticket atau email" },
                { title: "Fast Refund", desc: "Dana dikembalikan maksimal 7 hari kerja setelah request" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 mt-8">
              Mulai Hosting Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SharedHosting;