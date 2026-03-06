import React from 'react';
import { CreditCard, Shield, CheckCircle } from 'lucide-react';

const Pay = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">Pay Fee Online</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Secure Payment</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pay your fees securely online using our payment gateway. We accept all major credit cards, debit cards, and net banking.
              </p>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Application/Student ID</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Amount</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Your payment is secure and encrypted</span>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-primary text-white font-bold uppercase hover:bg-red-800 transition-colors rounded-sm">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pay;

