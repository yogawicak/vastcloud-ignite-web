import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Server, 
  Zap, 
  Shield, 
  Rocket, 
  TrendingUp, 
  Wrench, 
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const Index = () => {
  const stats = [
    { label: "Uptime", value: "99.99%", icon: CheckCircle },
    { label: "Websites", value: "10K+", icon: Users },
    { label: "Support", value: "24/7", icon: Clock },
    { label: "Certified", value: "ISO 27001", icon: Award }
  ];

  const products = [
    {
      title: "Cloud Hosting",
      description: "Performa fleksibel dengan cPanel terintegrasi",
      price: "Mulai dari Rp 45.000/bulan",
      icon: Cloud,
      link: "/cloud-hosting",
      color: "bg-gradient-primary"
    },
    {
      title: "Shared Hosting", 
      description: "Hosting terjangkau cocok untuk pemula dan bisnis kecil",
      price: "Mulai dari Rp 15.000/bulan",
      icon: Server,
      link: "/shared-hosting",
      color: "bg-gradient-secondary"
    },
    {
      title: "VPS Hosting",
      description: "Kontrol penuh dengan dedicated resources dan IP khusus", 
      price: "Mulai dari Rp 75.000/bulan",
      icon: Zap,
      link: "/vps-hosting",
      color: "bg-gradient-primary"
    },
    {
      title: "VASTPOD",
      description: "Container hosting modern untuk aplikasi cloud-native",
      price: "Mulai dari Rp 35.000/bulan", 
      icon: Rocket,
      link: "/vastpod",
      color: "bg-gradient-secondary"
    }
  ];

  const features = [
    {
      title: "Performance",
      description: "Server SSD NVMe + CDN Global untuk kecepatan maksimal",
      icon: Zap,
    },
    {
      title: "Security", 
      description: "SSL Gratis + Perlindungan DDoS + Daily Backup otomatis",
      icon: Shield,
    },
    {
      title: "Instant Deploy",
      description: "Setup otomatis dalam 60 detik tanpa konfigurasi rumit",
      icon: Rocket,
    },
    {
      title: "Scalability",
      description: "Scale up/down sesuai kebutuhan dengan mudah dan cepat",
      icon: TrendingUp,
    },
    {
      title: "Developer Tools",
      description: "Git integration, SSH access, staging environment",
      icon: Wrench,
    },
    {
      title: "Support 24/7",
      description: "Tim expert siap membantu kapan saja via chat & phone",
      icon: MessageCircle,
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "Tech Startup",
      rating: 5,
      quote: "Vastcloud sangat membantu startup kami dengan performa yang konsisten dan support yang responsif.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Wijaya", 
      company: "E-commerce",
      rating: 5,
      quote: "Migration dari hosting lama ke Vastcloud sangat smooth. Website kami jadi lebih cepat!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ahmad Rahman",
      company: "Digital Agency",
      rating: 5, 
      quote: "Tim developer kami suka dengan tools yang disediakan Vastcloud. Deployment jadi lebih mudah.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      company: "SaaS Platform",
      rating: 5,
      quote: "Skalabilitas VPS Vastcloud sangat membantu ketika user base kami bertambah dengan cepat.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "Apakah ada garansi uptime?",
      answer: "Ya, kami memberikan garansi uptime 99.99% dengan SLA yang jelas. Jika tidak terpenuhi, kami akan memberikan kompensasi."
    },
    {
      question: "Bagaimana proses migrasi website?",
      answer: "Tim kami akan membantu migrasi website Anda secara gratis dari hosting lama. Prosesnya biasanya selesai dalam 24 jam."
    },
    {
      question: "Apakah tersedia backup otomatis?",
      answer: "Semua paket hosting kami dilengkapi dengan daily backup otomatis yang disimpan selama 30 hari."
    },
    {
      question: "Bisakah upgrade/downgrade paket?",
      answer: "Tentu saja! Anda bisa upgrade atau downgrade paket kapan saja sesuai kebutuhan melalui panel kontrol."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?", 
      answer: "Kami menerima berbagai metode pembayaran: Transfer Bank, Credit Card, E-wallet (GoPay, OVO, Dana), dan Virtual Account."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Bangun Infrastruktur Web{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                    Lebih Kuat
                  </span>{" "}
                  bersama Vastcloud
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Hosting handal, VPS cepat, dan solusi cloud yang bisa diskalakan untuk developer dan bisnis modern
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Lihat Harga
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Cloud hosting infrastructure illustration" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solusi Hosting untuk Semua Kebutuhan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pilih layanan hosting yang tepat untuk project Anda, dari website personal hingga aplikasi enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 cursor-pointer">
                <Link to={product.link}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 ${product.color} rounded-xl`}>
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">{product.price}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center text-primary mt-4 group-hover:translate-x-2 transition-transform">
                      <span className="font-medium">Pelajari lebih lanjut</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Vastcloud?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Teknologi terdepan dan layanan terbaik untuk mendukung kesuksesan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-xl w-fit">
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

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dipercaya oleh Developer & Bisnis</h2>
            <p className="text-xl text-muted-foreground">
              Ribuan customer telah merasakan layanan terbaik dari Vastcloud
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
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
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Bergabunglah dengan 10,000+ Developer & Bisnis
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Yang sudah mempercayakan infrastruktur web mereka pada Vastcloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                Mulai Hosting Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Hubungi Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;