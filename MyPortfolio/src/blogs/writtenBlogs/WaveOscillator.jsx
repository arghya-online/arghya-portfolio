import React, { useState } from "react";

export default function WaveOscillator() {
  const [copiedSection, setCopiedSection] = useState("");

  const sections = [
    {
      id: "code1",
      title: "1. VI Characteristics of a Diode",
      code: `clc
clear all
close all
n = 1.65
Is = 220e-12
q = 1.6e-19
k = 1.38e-23
T = 300
vd = -1:0.001:1
Id = Is * (exp((q * vd) / (n * k * T)) - 1)
plot(vd, Id, 'k', 'LineWidth', 1.5)
xlabel('V_d (Volts)')
ylabel('I_d (Amps)')
title('VI Characteristics of a Diode')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')`,
    },
    {
      id: "code2",
      title: "2. VI Characteristics of N-MOSFET",
      code: `clc
clear all
close all
Vgs = 0:1:10
Vds = 0:0.1:10
Kn = 0.5e-3
Vth = 2
for i = 1:length(Vgs)
    for j = 1:length(Vds)
        if Vgs(i) <= Vth
            Id(i,j) = 0
        elseif Vds(j) < (Vgs(i) - Vth)
            Id(i,j) = Kn*((Vgs(i)-Vth)*Vds(j) - (Vds(j)^2)/2)
        else
            Id(i,j) = 0.5*Kn*(Vgs(i)-Vth)^2
        end
    end
end
plot(Vds, Id, 'LineWidth', 1.5)
xlabel('V_{DS} (V)')
ylabel('I_D (A)')
title('VI Characteristics of N-MOSFET')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')`,
    },
    {
      id: "code3",
      title: "3. Half-Wave Rectifier",
      code: `Vin = 10
f = 50
t = 0:0.001:0.1
Vac = Vin * sin(2 * pi * f * t)
Vdc = zeros(size(Vac))
for i = 1:length(Vac)
    if Vac(i) > 0
        Vdc(i) = Vac(i)
    else
        Vdc(i) = 0
    end
end
figure('Color', 'w')
plot(t, Vac, 'k', t, Vdc, '--k', 'LineWidth', 1.2)
xlabel('Time (s)', 'Color', 'k')
ylabel('Voltage (V)', 'Color', 'k')
title('Half-Wave Rectification', 'Color', 'k')
legend({'AC Input', 'Half-Wave Output'}, 'TextColor', 'k', 'Box', 'off')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')`,
    },
    {
      id: "code4",
      title: "4. Full-Wave Rectifier",
      code: `Vin = 10
f = 50
t = 0:0.001:0.1
Vac = Vin * sin(2 * pi * f * t)
Vdc = abs(Vac)
figure('Color', 'w')
plot(t, Vac, 'k', t, Vdc, '--k', 'LineWidth', 1.2)
xlabel('Time (s)', 'Color', 'k')
ylabel('Voltage (V)', 'Color', 'k')
title('Full-Wave Rectification', 'Color', 'k')
legend({'AC Input', 'Full-Wave Output'}, 'TextColor', 'k', 'Box', 'off')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')`,
    },
    {
      id: "code5",
      title: "5. VI Characteristics of a Resistor",
      code: `clc
clear all
close all
R = 1000
V = 0:1:10
I = V / R
plot(V, I, 'k', 'LineWidth', 1.5)
xlabel('Voltage (V)')
ylabel('Current (A)')
title('VI Characteristics of Resistor')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')`,
    },
    {
      id: "code6",
      title: "6. Zener Diode Characteristics",
      code: `clc
clear all
close all
Vz = 5.1
R = 1000
V = -10:0.1:10
for i = 1:length(V)
    if V(i) > 0
        I(i) = (V(i) - 0.7)/R
    elseif V(i) <= -Vz
        I(i) = (V(i) + Vz)/R
    else
        I(i) = 0
    end
end
plot(V, I, 'k', 'LineWidth', 1.5)
xlabel('Voltage (V)')
ylabel('Current (A)')
title('Zener Diode VI Characteristics')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')`,
    },
    {
      id: "code7",
      title: "7. XOR and XNOR Logic Gates",
      code: `A = [0 0 1 1]
B = [0 1 0 1]
C_xor = xor(A, B)
C_xnor = ~C_xor
disp('A B XOR XNOR')
for i = 1:length(A)
    fprintf('%d %d   %d    %d\\n', A(i), B(i), C_xor(i), C_xnor(i))
end`,
    },
    {
      id: "code8",
      title: "8. Waveform Oscillators",
      code: `A = input('Enter the amplitude: ')
fs = 1000
t = 0:1/fs:1
f1 = 10
x1 = A * sin(2 * pi * f1 * t)
subplot(4,1,1)
plot(t, x1, 'k', 'LineWidth', 1.5)
title('Sine Wave')
f2 = 10
x2 = A * square(2 * pi * f2 * t)
subplot(4,1,2)
plot(t, x2, 'k', 'LineWidth', 1.5)
title('Square Wave')
f3 = 5
x3 = A * sawtooth(2 * pi * f3 * t, 0.5)
subplot(4,1,3)
plot(t, x3, 'k', 'LineWidth', 1.5)
title('Triangular Wave')
f4 = 5
x4 = A * sawtooth(2 * pi * f4 * t)
subplot(4,1,4)
plot(t, x4, 'k', 'LineWidth', 1.5)
title('Sawtooth Wave')
sgtitle('Waveform Oscillators')
set(gcf, 'Color', 'w')`,
    },
    {
      id: "code9",
      title: "9. RC Phase Shift Oscillator",
      code: `f = 1000
t = 0:1/100:f*5/f
T = 1/f
V_out_amplitude = 5
phase_shift_rad = pi
attenuation = 0.129
Vin = sin(2*pi*f*t)
Vout = attenuation * V_out_amplitude * sin(2*pi*f*t + phase_shift_rad)
plot(t, Vin, 'k', 'LineWidth', 1.5)
hold on
plot(t, Vout, '--k', 'LineWidth', 1.5)
xlabel('Time (s)', 'Color', 'k')
ylabel('Amplitude', 'Color', 'k')
title('RC Phase Shift Oscillator', 'Color', 'k')
legend({'Input', 'Output'}, 'TextColor', 'k')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')
hold off`,
    },
    {
      id: "code10",
      title: "10. Wien Bridge Oscillator",
      code: `R = 10e3
C = 10e-9
Rf = 2 * R
Rb = R
f_res = 1/(2*pi*R*C)
omega_res = 2 * pi * f_res
f = logspace(log10(f_res/10), log10(f_res*10), 200)
omega = 2 * pi * f
H_RC = (1i * omega * R * C) ./ (1 + 3 * 1i * omega * R * C - (omega.^2) * R * C.^2)
A_v = 1 + Rf / Rb
Open_Loop_TF = A_v * H_RC
subplot(2,1,1)
semilogx(f, 20 * log10(abs(Open_Loop_TF)), 'k', 'LineWidth', 1.5)
ylabel('Magnitude (dB)', 'Color', 'k')
grid on
subplot(2,1,2)
semilogx(f, rad2deg(angle(Open_Loop_TF)), '--k', 'LineWidth', 1.5)
xlabel('Frequency (Hz)', 'Color', 'k')
ylabel('Phase (degrees)', 'Color', 'k')
grid on
T = 1/f_res
t = linspace(0, 5*T, 1000)
output_amplitude = 5
output_waveform = output_amplitude * sin(omega_res * t)
figure
plot(t, output_waveform, 'k', 'LineWidth', 1.5)
xlabel('Time (s)', 'Color', 'k')
ylabel('Amplitude (V)', 'Color', 'k')
title('Wien Bridge Oscillator Output', 'Color', 'k')
grid on
set(gca, 'Color', 'w', 'XColor', 'k', 'YColor', 'k')
set(gcf, 'Color', 'w')`,
    },
  ];

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(""), 1500);
  };

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">WaveOscillator</h1>
      {sections.map((section) => (
        <div key={section.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="relative">
            <button
              onClick={() => handleCopy(section.code, section.id)}
              className="absolute top-3 right-3 bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600 transition"
            >
              {copiedSection === section.id ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              {section.code}
            </pre>
          </div>
        </div>
      ))}
    </article>
  );
}
