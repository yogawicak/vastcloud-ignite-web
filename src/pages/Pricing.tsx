import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  ArrowRight,
  Cloud,
  Server,
  Zap,
  Container,
  Star,
  X
} from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const pricingData = {
    'shared-hosting': [
      {
        name: "Personal",
        price: { monthly: 15000, yearly: 150000 },
        popular: false,
        features: {
          websites: "1 Website",
          storage: "2 GB Storage", 
          bandwidth: "Unlimited",
          email: "1 Email Account",
          ssl: "Free SSL",
          support: "Email Support"
        },
        includes: ["Website Builder", "WordPress Toolkit", "cPanel Access", "24/7 Monitoring"]
      },
      {
        name: "Starter", 
        price: { monthly: 25000, yearly: 250000 },
        popular: false,
        features: {
          websites: "3 Websites",
          storage: "5 GB Storage",
          bandwidth: "Unlimited", 
          email: "5 Email Accounts",
          ssl: "Free SSL + Backup",
          support: "Basic Support"
        },
        includes: ["Semua fitur Personal", "Subdomain Unlimited", "FTP Accounts", "One-Click Apps"]
      },
      {
        name: "Business",
        price: { monthly: 45000, yearly: 450000 },
        popular: true,
        features: {
          websites: "10 Websites",
          storage: "15 GB Storage",
          bandwidth: "Unlimited",
          email: "25 Email Accounts", 
          ssl: "Priority Support",
          support: "Priority Support"
        },
        includes: ["Semua fitur Starter", "Daily Backup", "Advanced Security", "Performance Cache"]
      },
      {
        name: "Professional",
        price: { monthly: 75000, yearly: 750000 },
        popular: false,
        features: {
          websites: "Unlimited",
          storage: "50 GB Storage",
          bandwidth: "Unlimited",
          email: "100 Email Accounts",
          ssl: "Premium Support", 
          support: "Premium Support"
        },
        includes: ["Semua fitur Business", "SSH Access", "Git Integration", "Staging Environment"]
      }
    ],
    'cloud-hosting': [
      {
        name: "Starter Cloud",
        price: { monthly: 45000, yearly: 450000 },
        popular: false,
        features: {
          ram: "2 GB RAM",
          cpu: "2 CPU Cores",
          storage: "25 GB SSD",
          websites: "5 Websites",
          bandwidth: "Unlimited",
          backup: "Daily Backup"
        },
        includes: ["cPanel Control Panel", "Auto Scaling", "Global CDN", "99.99% Uptime SLA"]
      },
      {
        name: "Business Cloud",
        price: { monthly: 95000, yearly: 950000 },
        popular: true, 
        features: {
          ram: "4 GB RAM",
          cpu: "4 CPU Cores",
          storage: "50 GB SSD",
          websites: "15 Websites", 
          bandwidth: "Unlimited",
          backup: "Priority Support"
        },
        includes: ["Semua fitur Starter", "HTTP/2 & PHP 8.x", "Redis Caching", "Malware Scanning"]
      },
      {
        name: "Enterprise Cloud",
        price: { monthly: 185000, yearly: 1850000 },
        popular: false,
        features: {
          ram: "8 GB RAM", 
          cpu: "6 CPU Cores",
          storage: "100 GB SSD",
          websites: "Unlimited",
          bandwidth: "Dedicated IP",
          backup: "White-label option"
        },
        includes: ["Semua fitur Business", "Dedicated Resources", "Custom PHP Config", "24/7 Phone Support"]
      }
    ],
    'vps-hosting': [
      {
        name: "VPS Basic",
        price: { monthly: 75000, yearly: 750000 },
        popular: false,
        features: {
          ram: "1 GB RAM",
          cpu: "1 CPU Core",
          storage: "25 GB SSD",
          ip: "1 Public IP",
          os: "Multiple OS",
          bandwidth: "1TB Transfer"
        },
        includes: ["Full Root Access", "KVM Virtualization", "99.9% Uptime SLA", "Basic Monitoring"]
      },
      {
        name: "VPS Standard",
        price: { monthly: 135000, yearly: 1350000 },
        popular: false,
        features: {
          ram: "2 GB RAM", 
          cpu: "2 CPU Cores",
          storage: "50 GB SSD",
          ip: "1 Public + 1 Private IP",
          os: "Control Panel Options",
          bandwidth: "2TB Transfer"
        },
        includes: ["Semua fitur Basic", "cPanel/DirectAdmin Available", "Weekly Backup", "SSH Key Management"]
      },
      {
        name: "VPS Advanced",
        price: { monthly: 245000, yearly: 2450000 },
        popular: true,
        features: {
          ram: "4 GB RAM",
          cpu: "4 CPU Cores", 
          storage: "100 GB SSD",
          ip: "2 Public + 2 Private IP",
          os: "Free Managed Service",
          bandwidth: "4TB Transfer"
        },
        includes: ["Semua fitur Standard", "Free Managed Service", "Daily Backup", "Load Balancer Ready"]
      },
      {
        name: "VPS Pro",
        price: { monthly: 425000, yearly: 4250000 },
        popular: false,
        features: {
          ram: "8 GB RAM",
          cpu: "6 CPU Cores",
          storage: "200 GB SSD", 
          ip: "4 Public + 4 Private IP",
          os: "Priority Support",
          bandwidth: "8TB Transfer"
        },
        includes: ["Semua fitur Advanced", "Dedicated CPU Cores", "NVMe SSD Storage", "Custom Firewall Rules"]
      }
    ],
    'vastpod': [
      {
        name: "Micro Pod",
        price: { monthly: 35000, yearly: 350000 },
        popular: false,
        features: {
          ram: "0.5 GB RAM",
          cpu: "0.5 CPU",
          storage: "10 GB Storage",
          containers: "1 Container", 
          monitoring: "Basic monitoring",
          domains: "1 Custom Domain"
        },
        includes: ["Docker Support", "Environment Variables", "Custom Domains", "SSL Certificate"]
      },
      {
        name: "Small Pod",
        price: { monthly: 65000, yearly: 650000 },
        popular: false,
        features: {
          ram: "1 GB RAM",
          cpu: "1 CPU",
          storage: "25 GB Storage",
          containers: "3 Containers",
          monitoring: "Advanced monitoring", 
          domains: "3 Custom Domains"
        },
        includes: ["Semua fitur Micro", "Multi-container Support", "Real-time Logs", "Database Connections"]
      },
      {
        name: "Medium Pod", 
        price: { monthly: 125000, yearly: 1250000 },
        popular: true,
        features: {
          ram: "2 GB RAM",
          cpu: "2 CPU",
          storage: "50 GB Storage",
          containers: "10 Containers",
          monitoring: "Load balancing",
          domains: "10 Custom Domains"
        },
        includes: ["Semua fitur Small", "Load Balancing", "Auto-scaling", "Redis/Memcached"]
      },
      {
        name: "Large Pod",
        price: { monthly: 235000, yearly: 2350000 },
        popular: false,
        features: {
          ram: "4 GB RAM",
          cpu: "4 CPU", 
          storage: "100 GB Storage",
          containers: "25 Containers",
          monitoring: "Custom domains",
          domains: "Unlimited Domains"
        },
        includes: ["Semua fitur Medium", "Microservices Architecture", "Private Networking", "Advanced Security"]
      }
    ]
  };

  const formatPrice = (price: number, period: string) => {
    if (period === 'yearly') {
      const monthlyEquivalent = Math.round(price / 12);
      return {
        display: `Rp ${monthlyEquivalent.toLocaleString('id-ID')}/bulan`,
        note: `Dibayar Rp ${price.toLocaleString('id-ID')}/tahun`
      };
    }
    return {
      display: `Rp ${price.toLocaleString('id-ID')}/bulan`,
      note: null
    };
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'shared-hosting': return Server;
      case 'cloud-hosting': return Cloud;
      case 'vps-hosting': return Zap;
      case 'vastpod': return Container;
      default: return Server;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Pricing yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Transparan
              </span>{" "}
              untuk Semua Kebutuhan
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Pilih paket hosting yang sesuai dengan budget dan kebutuhan Anda. Tanpa biaya tersembunyi, tanpa kontrak jangka panjang.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <span className={`${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-200'}`}>
                Yearly 
                <Badge className="ml-2 bg-yellow-500 text-yellow-900">Save 17%</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="shared-hosting" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-16">
              <TabsTrigger value="shared-hosting">Shared</TabsTrigger>
              <TabsTrigger value="cloud-hosting">Cloud</TabsTrigger>
              <TabsTrigger value="vps-hosting">VPS</TabsTrigger>
              <TabsTrigger value="vastpod">VASTPOD</TabsTrigger>
            </TabsList>

            {Object.entries(pricingData).map(([category, plans]) => {
              const IconComponent = getIcon(category);
              return (
                <TabsContent key={category} value={category}>
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary mr-3" />
                      <h2 className="text-3xl font-bold capitalize">
                        {category.replace('-', ' ')} Plans
                      </h2>
                    </div>
                    <p className="text-xl text-muted-foreground">
                      Pilih paket yang tepat untuk kebutuhan {category.replace('-', ' ')} Anda
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan, index) => {
                      const priceInfo = formatPrice(plan.price[billingPeriod], billingPeriod);
                      return (
                        <Card key={index} className={`relative hover:shadow-soft transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                          {plan.popular && (
                            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                              Most Popular
                            </Badge>
                          )}
                          
                          <CardHeader className="text-center pb-6">
                            <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                            <div className="mt-4">
                              <div className="text-2xl font-bold">{priceInfo.display}</div>
                              {priceInfo.note && (
                                <div className="text-sm text-muted-foreground mt-1">
                                  {priceInfo.note}
                                </div>
                              )}
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-6">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-primary text-sm">Spesifikasi</h4>
                              <div className="space-y-2 text-sm">
                            {Object.entries(plan.features).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize">{key.replace('_', ' ')}:</span>
                                <span className="font-medium">{String(value)}</span>
                              </div>
                            ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-primary text-sm">Fitur Termasuk</h4>
                              <div className="space-y-2">
                                {plan.includes.map((feature, fIndex) => (
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
                              Pilih {plan.name}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Comparison Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semua Paket Termasuk</h2>
            <p className="text-xl text-muted-foreground">
              Fitur dasar yang tersedia di semua paket hosting kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "99.99% Uptime SLA", desc: "Garansi uptime dengan kompensasi jika tidak terpenuhi" },
              { title: "Free SSL Certificate", desc: "SSL otomatis untuk semua domain dengan renewal otomatis" },
              { title: "24/7 Support", desc: "Tim support expert siap membantu kapan saja" },
              { title: "30-day Money Back", desc: "Garansi uang kembali 100% dalam 30 hari pertama" },
              { title: "Free Migration", desc: "Bantuan migrasi website dari hosting lama secara gratis" },
              { title: "Daily Backup", desc: "Backup otomatis setiap hari dengan restore point 30 hari" },
              { title: "DDoS Protection", desc: "Perlindungan dari serangan DDoS hingga 10 Gbps" },
              { title: "Global CDN", desc: "Content delivery network dengan 200+ edge locations" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan tentang Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Jawaban untuk pertanyaan umum seputar harga dan pembayaran
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Apakah ada biaya setup atau aktivasi?",
                answer: "Tidak ada biaya setup, aktivasi, atau biaya tersembunyi lainnya. Harga yang tertera sudah final dan siap pakai."
              },
              {
                question: "Bisakah upgrade/downgrade paket kapan saja?",
                answer: "Ya, Anda bisa upgrade atau downgrade paket kapan saja melalui panel kontrol. Perubahan akan berlaku pada billing cycle berikutnya."
              },
              {
                question: "Bagaimana kebijakan refund?",
                answer: "Kami memberikan 30-day money back guarantee tanpa pertanyaan. Refund akan diproses maksimal 7 hari kerja setelah request."
              },
              {
                question: "Metode pembayaran apa saja yang diterima?",
                answer: "Kami menerima Transfer Bank, Credit Card, E-wallet (GoPay, OVO, Dana), Virtual Account, dan berbagai metode pembayaran lainnya."
              },
              {
                question: "Apakah harga yearly lebih hemat?",
                answer: "Ya, dengan pembayaran tahunan Anda bisa hemat hingga 17% dibanding pembayaran bulanan. Plus tidak perlu repot bayar setiap bulan."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Memulai Journey Hosting Anda?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Dapatkan hosting terbaik dengan harga terjangkau. Setup instant, support 24/7, dan garansi uang kembali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Mulai Hosting Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;