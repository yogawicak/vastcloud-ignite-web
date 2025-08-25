import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu, HardDrive, Zap, Network, ArrowRight } from 'lucide-react';

interface VpsConfig {
  cpu: number;
  ram: number;
  storage: number;
  bandwidth: number;
}

const VpsCalculator = () => {
  const [config, setConfig] = useState<VpsConfig>({
    cpu: 2,
    ram: 4,
    storage: 50,
    bandwidth: 2
  });

  const [price, setPrice] = useState({
    monthly: 0,
    hourly: 0
  });

  // Price calculation logic
  useEffect(() => {
    const calculatePrice = () => {
      const baseCpuPrice = config.cpu * 25000; // Rp 25k per CPU core
      const baseRamPrice = config.ram * 15000; // Rp 15k per GB RAM
      const baseStoragePrice = config.storage * 1500; // Rp 1.5k per GB storage
      const baseBandwidthPrice = config.bandwidth * 10000; // Rp 10k per TB bandwidth
      
      const totalMonthly = baseCpuPrice + baseRamPrice + baseStoragePrice + baseBandwidthPrice;
      const totalHourly = totalMonthly / 720; // Approx 720 hours per month
      
      setPrice({
        monthly: Math.round(totalMonthly),
        hourly: Math.round(totalHourly)
      });
    };

    calculatePrice();
  }, [config]);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('id-ID').format(amount);
  };

  const sliderConfigs = [
    {
      key: 'cpu' as keyof VpsConfig,
      label: 'CPU Cores',
      icon: Cpu,
      min: 1,
      max: 16,
      step: 1,
      value: config.cpu,
      unit: 'Core',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'ram' as keyof VpsConfig,
      label: 'Memory (RAM)',
      icon: Zap,
      min: 1,
      max: 64,
      step: 1,
      value: config.ram,
      unit: 'GB',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      key: 'storage' as keyof VpsConfig,
      label: 'SSD Storage',
      icon: HardDrive,
      min: 25,
      max: 1000,
      step: 25,
      value: config.storage,
      unit: 'GB',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      key: 'bandwidth' as keyof VpsConfig,
      label: 'Bandwidth',
      icon: Network,
      min: 0.5,
      max: 20,
      step: 0.5,
      value: config.bandwidth,
      unit: 'TB',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const handleSliderChange = (key: keyof VpsConfig, value: number[]) => {
    setConfig(prev => ({
      ...prev,
      [key]: value[0]
    }));
  };

  return (
    <div className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            VPS Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sesuaikan spesifikasi VPS sesuai kebutuhan Anda dan lihat estimasi harga real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Configuration Sliders */}
          <div className="lg:col-span-2 space-y-6">
            {sliderConfigs.map((slider) => (
              <Card key={slider.key} className="hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${slider.gradient}`}>
                      <slider.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{slider.label}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-primary">
                          {slider.value}
                        </span>
                        <span className="text-muted-foreground">{slider.unit}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="px-3">
                    <Slider
                      value={[slider.value]}
                      onValueChange={(value) => handleSliderChange(slider.key, value)}
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{slider.min} {slider.unit}</span>
                      <span>{slider.max} {slider.unit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Price Display */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-glow border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Estimated Price</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      Rp {formatPrice(price.monthly)}
                    </div>
                    <div className="text-muted-foreground">/bulan</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-semibold">
                      Rp {formatPrice(price.hourly)}
                    </div>
                    <div className="text-sm text-muted-foreground">/jam</div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold">Spesifikasi Anda:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <Badge variant="secondary">{config.cpu} Cores</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <Badge variant="secondary">{config.ram} GB</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage:</span>
                      <Badge variant="secondary">{config.storage} GB SSD</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Bandwidth:</span>
                      <Badge variant="secondary">{config.bandwidth} TB</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold text-sm">Included Features:</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Full Root Access</li>
                    <li>• KVM Virtualization</li>
                    <li>• 99.9% Uptime SLA</li>
                    <li>• DDoS Protection</li>
                    <li>• Free Weekly Backup</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow" size="lg">
                  Order VPS Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Setup instan • No setup fee • 30-day money back guarantee
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VpsCalculator;