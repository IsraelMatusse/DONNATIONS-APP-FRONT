import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const paymentMethods = {
  mobileWallet: [
    { id: 'mpesa', name: 'M-Pesa', icon: '/mpesa.png' },
    { id: 'emola', name: 'e-Mola', icon: '/emola.png' },
    { id: 'mkesh', name: 'mKesh', icon: '/mkesh.png' },
  ],
  card: [
    { id: 'visa', name: 'Visa', icon: '/visa.png' },
    { id: 'mastercard', name: 'Mastercard', icon: '/mastercard.png' },
    { id: 'paypal', name: 'PayPal', icon: '/paypal.png' },
  ],
};

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  campaignTitle: string;
}

export function DonationPopup({ isOpen, onClose, campaignTitle }: DonationPopupProps) {
  const [amount, setAmount] = useState('');
  const [paymentType, setPaymentType] = useState('mobileWallet');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', {
      amount,
      paymentType,
      paymentMethod,
      phoneNumber,
      cardNumber,
      cardExpiry,
      cardCVC,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-800">Fazer uma Doação</DialogTitle>
          <DialogDescription>Você está doando para a campanha: {campaignTitle}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-purple-700">
                Valor da Doação (MZN)
              </Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Digite o valor"
                required
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-purple-700">Método de Pagamento</Label>
              <Tabs value={paymentType} onValueChange={setPaymentType} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mobileWallet" className="text-purple-600">
                    Carteira Móvel
                  </TabsTrigger>
                  <TabsTrigger value="card" className="text-purple-600">
                    Cartão
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mobileWallet">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid gap-4"
                  >
                    {paymentMethods.mobileWallet.map(method => (
                      <div
                        key={method.id}
                        className="flex items-center space-x-2 border rounded p-2"
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label
                          htmlFor={method.id}
                          className="flex items-center flex-1 cursor-pointer"
                        >
                          <img src={method.icon} alt={method.name} className="w-12 h-12 mr-2" />
                          {method.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {paymentMethod && (
                    <div className="mt-4">
                      <Label htmlFor="phoneNumber" className="text-purple-700">
                        Número de Telemóvel
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Digite o número de telemóvel"
                        required
                        className="border-purple-300 focus:border-purple-500"
                      />
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="card">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid gap-4 mb-4"
                  >
                    {paymentMethods.card.map(method => (
                      <div
                        key={method.id}
                        className="flex items-center space-x-2 border rounded p-2"
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label
                          htmlFor={method.id}
                          className="flex items-center flex-1 cursor-pointer"
                        >
                          <img src={method.icon} alt={method.name} className="w-12 h-8 mr-2" />
                          {method.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {paymentMethod && (
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="cardNumber" className="text-purple-700">
                          Nome do Dono da Conta
                        </Label>
                        <Input
                          id="cardHolder"
                          type="text"
                          value={cardHolder}
                          onChange={e => setCardHolder(e.target.value)}
                          placeholder="John Doe"
                          required
                          className="border-purple-300 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber" className="text-purple-700">
                          Número do Cartão
                        </Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          value={cardNumber}
                          onChange={e => setCardNumber(e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="border-purple-300 focus:border-purple-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry" className="text-purple-700">
                            Data de Expiração
                          </Label>
                          <Input
                            id="cardExpiry"
                            type="text"
                            value={cardExpiry}
                            onChange={e => setCardExpiry(e.target.value)}
                            placeholder="MM/AA"
                            required
                            className="border-purple-300 focus:border-purple-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCVC" className="text-purple-700">
                            Código de Segurança
                          </Label>
                          <Input
                            id="cardCVC"
                            type="text"
                            value={cardCVC}
                            onChange={e => setCardCVC(e.target.value)}
                            placeholder="***"
                            required
                            className="border-purple-300 focus:border-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="border-purple-500 text-purple-700">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
              Confirmar Doação
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
