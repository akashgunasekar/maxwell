import React from "react";
import { ProductModel } from "@/data/products";

interface ProductModelsProps {
  models: ProductModel[];
}

export default function ProductModels({ models }: ProductModelsProps) {
  if (!models || models.length === 0) return null;

  // Determine which optional columns exist in these models
  const hasDimensions = models.some((m) => m.width || m.depth || m.height);
  const hasCapacity = models.some((m) => m.capacity);
  const hasThickness = models.some((m) => m.hotPlateThickness);
  const hasNotes = models.some((m) => m.notes);

  return (
    <div className="w-full">
      {/* Desktop Professional Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
          <thead className="bg-slate-50 font-bold uppercase tracking-wider text-slate-700">
            <tr>
              <th scope="col" className="px-4 py-3.5">
                Model
              </th>
              {hasDimensions && (
                <>
                  <th scope="col" className="px-4 py-3.5 text-center">
                    Width (W)
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-center">
                    Depth (D)
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-center">
                    Height (H)
                  </th>
                </>
              )}
              <th scope="col" className="px-4 py-3.5 text-center">
                Power (kW)
              </th>
              <th scope="col" className="px-4 py-3.5 text-center">
                Voltage (V)
              </th>
              <th scope="col" className="px-4 py-3.5 text-center">
                Frequency (Hz)
              </th>
              {hasCapacity && (
                <th scope="col" className="px-4 py-3.5 text-center">
                  Capacity
                </th>
              )}
              {hasThickness && (
                <th scope="col" className="px-4 py-3.5 text-center">
                  Plate Thickness
                </th>
              )}
              {hasNotes && (
                <th scope="col" className="px-4 py-3.5 text-left">
                  Configuration
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
            {models.map((m, idx) => (
              <tr
                key={m.model}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
              >
                <td className="px-4 py-3 font-bold text-sky-800 whitespace-nowrap">
                  {m.model}
                </td>
                {hasDimensions && (
                  <>
                    <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                      {m.width ? `${m.width} mm` : "—"}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                      {m.depth ? `${m.depth} mm` : "—"}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                      {m.height ? `${m.height} mm` : "—"}
                    </td>
                  </>
                )}
                <td className="px-4 py-3 text-center font-bold text-slate-900 whitespace-nowrap">
                  {m.power}
                </td>
                <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                  {m.voltage}
                </td>
                <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                  {m.frequency}
                </td>
                {hasCapacity && (
                  <td className="px-4 py-3 text-center font-semibold text-sky-800 whitespace-nowrap">
                    {m.capacity || "—"}
                  </td>
                )}
                {hasThickness && (
                  <td className="px-4 py-3 text-center text-slate-700 whitespace-nowrap">
                    {m.hotPlateThickness || "—"}
                  </td>
                )}
                {hasNotes && (
                  <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                    {m.notes || "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards - Prevents Table Layout Breakage */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {models.map((m) => (
          <div
            key={m.model}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Model
              </span>
              <span className="text-sm font-extrabold text-sky-800">
                {m.model}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <div>
                <span className="text-slate-400 block">Power (kW)</span>
                <span className="font-bold text-slate-900">{m.power}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Voltage & Freq</span>
                <span className="font-medium text-slate-700">
                  {m.voltage} / {m.frequency}
                </span>
              </div>

              {hasDimensions && (m.width || m.depth || m.height) && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">Size (W × D × H)</span>
                  <span className="font-medium text-slate-800">
                    {m.width || "—"} × {m.depth || "—"} × {m.height || "—"} mm
                  </span>
                </div>
              )}

              {m.capacity && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">Capacity</span>
                  <span className="font-semibold text-sky-800">
                    {m.capacity}
                  </span>
                </div>
              )}

              {m.hotPlateThickness && (
                <div>
                  <span className="text-slate-400 block">Plate Thickness</span>
                  <span className="font-medium text-slate-800">
                    {m.hotPlateThickness}
                  </span>
                </div>
              )}

              {m.notes && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">Configuration</span>
                  <span className="font-medium text-slate-700">{m.notes}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
