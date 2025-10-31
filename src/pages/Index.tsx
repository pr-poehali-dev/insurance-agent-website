import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [insuranceType, setInsuranceType] = useState('auto');
  const [insuranceSum, setInsuranceSum] = useState([1000000]);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculateInsurance = () => {
    const rates: { [key: string]: number } = {
      auto: 0.05,
      health: 0.08,
      property: 0.03,
      life: 0.06,
    };
    const price = insuranceSum[0] * (rates[insuranceType] || 0.05);
    setCalculatedPrice(Math.round(price));
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СтрахПро
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary transition-colors">Калькулятор</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">Связаться</Button>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Защитите своё будущее{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  прямо сейчас
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Комплексное страхование для вас и вашей семьи. Индивидуальный подход, выгодные условия и быстрое оформление полисов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Консультация
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15 лет</div>
                  <div className="text-gray-600">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="/placeholder.svg"
                alt="Страхование"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр страховых решений для любых потребностей</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Car', title: 'ОСАГО и КАСКО', description: 'Полная защита вашего автомобиля от любых рисков', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Heart', title: 'Медицинское страхование', description: 'Качественная медицина доступна всегда', color: 'from-purple-500 to-pink-500' },
              { icon: 'Home', title: 'Страхование недвижимости', description: 'Защита вашего дома и имущества', color: 'from-orange-500 to-red-500' },
              { icon: 'Users', title: 'Страхование жизни', description: 'Финансовая безопасность для семьи', color: 'from-green-500 to-emerald-500' },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Калькулятор страхования</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость полиса за минуту</p>
          </div>
          <Card className="shadow-2xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Онлайн расчёт</CardTitle>
              <CardDescription>Выберите тип страхования и укажите желаемую сумму покрытия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="insurance-type" className="text-base">Тип страхования</Label>
                <Select value={insuranceType} onValueChange={setInsuranceType}>
                  <SelectTrigger id="insurance-type" className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">ОСАГО / КАСКО</SelectItem>
                    <SelectItem value="health">Медицинское</SelectItem>
                    <SelectItem value="property">Недвижимость</SelectItem>
                    <SelectItem value="life">Жизнь</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Сумма страхования</Label>
                  <span className="text-2xl font-bold text-primary">
                    {insuranceSum[0].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={insuranceSum}
                  onValueChange={setInsuranceSum}
                  min={100000}
                  max={10000000}
                  step={100000}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>100 000 ₽</span>
                  <span>10 000 000 ₽</span>
                </div>
              </div>

              <Button onClick={calculateInsurance} className="w-full h-14 text-lg" size="lg">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>

              {calculatedPrice > 0 && (
                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20 animate-scale-in">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Ориентировочная стоимость полиса:</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {calculatedPrice.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-gray-500 mt-2">в год</p>
                    <Button className="mt-4" size="lg">Оформить полис</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src="/placeholder.svg"
                alt="О компании"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">О нашей компании</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы работаем на рынке страхования уже более 15 лет, предоставляя качественные услуги тысячам клиентов по всей России.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша команда профессионалов всегда готова подобрать оптимальное решение для каждого клиента, учитывая все особенности и пожелания.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <Icon name="Award" className="text-primary mb-2" size={32} />
                  <h3 className="font-bold text-lg mb-1">Лицензия ЦБ РФ</h3>
                  <p className="text-gray-600 text-sm">Официальная аккредитация</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <Icon name="Zap" className="text-secondary mb-2" size={32} />
                  <h3 className="font-bold text-lg mb-1">Быстрое оформление</h3>
                  <p className="text-gray-600 text-sm">От 15 минут</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <Icon name="DollarSign" className="text-accent mb-2" size={32} />
                  <h3 className="font-bold text-lg mb-1">Выгодные тарифы</h3>
                  <p className="text-gray-600 text-sm">Лучшие цены на рынке</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <Icon name="Headphones" className="text-green-600 mb-2" size={32} />
                  <h3 className="font-bold text-lg mb-1">Поддержка 24/7</h3>
                  <p className="text-gray-600 text-sm">Всегда на связи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Иванова',
                rating: 5,
                text: 'Отличный сервис! Быстро оформили КАСКО, все объяснили понятно. Очень довольна работой менеджера.',
              },
              {
                name: 'Михаил Петров',
                rating: 5,
                text: 'Страхую недвижимость уже третий год. Цены адекватные, условия прозрачные. Рекомендую!',
              },
              {
                name: 'Елена Сидорова',
                rating: 5,
                text: 'Помогли подобрать медицинскую страховку для всей семьи. Профессиональный подход и внимание к деталям.',
              },
            ].map((review, index) => (
              <Card key={index} className="animate-slide-up hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-lg text-gray-600">
                Ответим на любые вопросы и поможем подобрать оптимальное страховое решение
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@strahpro.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">Москва, ул. Примерная, 123</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-bold">СтрахПро</span>
              </div>
              <p className="text-gray-400">Ваша надёжная защита на все случаи жизни</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ОСАГО и КАСКО</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Медицинское</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Жизнь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 СтрахПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
