import {
  Banknote,
  CreditCard,
  PiggyBank,
  Shield,
  HelpCircle,
} from "lucide-react";

export const getIconByType = (type: string) => {
  switch (type.toLowerCase()) {
    case "cuenta":
      return <PiggyBank className="w-6 h-6 text-blue-700" />;
    case "tarjeta":
      return <CreditCard className="w-6 h-6 text-blue-700" />;
    case "fondo":
      return <Banknote className="w-6 h-6 text-blue-700" />;
    case "seguro":
      return <Shield className="w-6 h-6 text-blue-700" />;
    default:
      return <HelpCircle className="w-6 h-6 text-blue-700" />;
  }
};
