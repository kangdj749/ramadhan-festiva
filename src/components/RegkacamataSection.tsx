"use client";

import { useState} from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  phone: string;
  age: string;
  address: string;
  };
export default function RegistrationPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
  
    
  } = useForm<FormValues>();

  
  const [submitting, setSubmitting] = useState(false);
  

  

  

  const onSubmit = async (data: FormValues) => {
     

    setSubmitting(true);
    try {
      const res = await fetch("/api/registrationkacamata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data}),
      });

      const json: { success: boolean; error?: string } = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Gagal daftar");

      router.push(`/successkacamata?name=${encodeURIComponent(data.fullName)}`);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  };

  /* ========================= */
  /* ===== RENDER UI ===== */
  /* ========================= */

  const formFields: Array<{
    label: string;
    field: keyof FormValues;
    type: string;
    placeholder?: string;
  }> = [
    { label: "Nama Lengkap", field: "fullName", type: "text" },
    { label: "Nomor Telepon", field: "phone", type: "tel", placeholder: "08xxxxxxxxxx" },
    { label: "Usia", field: "age", type: "text" },
    { label: "Alamat Lengkap", field: "address", type: "text" },
    
  ];
  return (
    <section className="py-12 px-4 bg-[#f6f9ff]">
      <div className="w-full max-w-md mx-auto bg-white border border-blue-100 rounded-2xl shadow-sm p-6 space-y-6">
        <h1 className="text-xl font-bold text-center text-emerald-700">
          Form Daftar Program Kacamata Gratis
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-emerald-700">
          {formFields.map((item) => (
            <Input key={item.field} label={item.label}>
              <input
                {...register(item.field as keyof FormValues)}
                type={item.type}
                placeholder={item.placeholder}
                className="input-premium text-emerald-700"
              />
            </Input>
          ))}

          
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-emerald-700 text-white py-3 rounded-xl text-sm font-semibold transition disabled:opacity-50 hover:opacity-90"
          >
            {submitting ? "Memproses..." : "Daftar Program Kacamata Gratis"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input-premium {
          width: 100%;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
        }

        .input-premium:focus {
          border-color: #032b83;
          box-shadow: 0 0 0 2px rgba(3, 43, 131, 0.1);
        }
      `}</style>
    </section>
  );
}

/* COMPONENTS */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium mb-2 text-[#032b83]">
      {children}
    </p>
  );
}

function Input({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}



