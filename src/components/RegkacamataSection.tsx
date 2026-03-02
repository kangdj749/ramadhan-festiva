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

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [studentCardUrl, setStudentCardUrl] = useState("");

  

  const handleUpload = async (file: File) => {
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload-student-card", {
        method: "POST",
        body: formData,
      });

      const json: { success: boolean; url?: string } = await res.json();

      if (!res.ok || !json.success || !json.url) throw new Error("Upload gagal");

      setStudentCardUrl(json.url);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Terjadi kesalahan upload");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!studentCardUrl) return alert("Upload kartu pelajar dulu ya.");
    

    setSubmitting(true);
    try {
      const res = await fetch("/api/registrationkacamata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, studentCardUrl }),
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

          {/* Upload */}
            <div>
              <p className="label">Upload KTP</p>
              <div className="input-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) void handleUpload(file);
                  }}
                />
              </div>
              {uploading && <p className="text-xs text-muted mt-1">Uploading...</p>}
              {studentCardUrl && <p className="text-xs mt-1 text-primary">Upload berhasil ✓</p>}
            </div>               

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



