from pathlib import Path
import textwrap

PAGE_WIDTH = 595
PAGE_HEIGHT = 842
OUTPUT = Path(__file__).resolve().parents[1] / 'public' / 'cv-rick.pdf'
commands = []


def raw(command: str) -> None:
    commands.append(command.encode('ascii'))


def fill(color: tuple[float, float, float]) -> str:
    return f'{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} rg\n'


def draw_text(x: float, y: float, value: str, size: float = 9, bold: bool = False, color=(0.15, 0.14, 0.17)) -> None:
    value = value.replace('—', '-').replace('–', '-').replace('’', "'").replace('“', '"').replace('”', '"')
    escaped = value.encode('cp1252').replace(b'\\', b'\\\\').replace(b'(', b'\\(').replace(b')', b'\\)')
    commands.append(fill(color).encode('ascii'))
    commands.append(f'BT /{"F2" if bold else "F1"} {size:.1f} Tf {x:.1f} {y:.1f} Td ('.encode('ascii') + escaped + b') Tj ET\n')


def section(title: str, y: float) -> float:
    draw_text(48, y, title.upper(), 9, True, (0.43, 0.25, 0.67))
    raw('0.84 0.81 0.87 RG 0.6 w 48 ' + str(y - 6) + ' m 547 ' + str(y - 6) + ' l S\n')
    return y - 22


def paragraph(value: str, y: float, size: float = 9.2, width: int = 112, leading: float = 13) -> float:
    for line in textwrap.wrap(value, width=width, break_long_words=False, break_on_hyphens=False):
        draw_text(48, y, line, size)
        y -= leading
    return y - 4


raw(fill((0.12, 0.07, 0.18)) + '0 727 595 115 re f\n')
draw_text(48, 798, 'Henrique Abade Lemos', 23, True, (1, 1, 1))
draw_text(49, 774, 'RICK  |  DESENVOLVEDOR FULL STACK', 10, True, (0.82, 0.70, 0.96))
draw_text(49, 752, 'Barra do Mendes, Bahia  |  21 anos  |  github.com/rickdev8', 9, False, (0.93, 0.91, 0.96))
draw_text(49, 736, 'E-mail: [email]  |  LinkedIn: [link]', 8.5, False, (0.78, 0.75, 0.81))

y = 701
y = section('Perfil', y)
y = paragraph('Desenvolvedor full stack e estagiário de Desenvolvimento de Software na Redtech. Estudante de Análise e Desenvolvimento de Sistemas no IFBA, com certificação AWS Cloud Practitioner. Experiência construindo software para uso real, do desenvolvimento à publicação em produção.', y)

y = section('Experiência', y)
draw_text(48, y, 'Estagiário de Desenvolvimento de Software  |  Redtech', 10, True)
y -= 15
y = paragraph('Atuação no desenvolvimento e evolução de software. Participação em projetos de front-end, back-end e integração de serviços.', y)

y = section('Formação e certificações', y)
draw_text(48, y, 'Análise e Desenvolvimento de Sistemas  |  IFBA', 10, True)
draw_text(48, y - 14, 'Em andamento · previsão de conclusão: julho de 2028', 9)
draw_text(48, y - 31, 'AWS Certified Cloud Practitioner  |  Amazon Web Services', 9.5, True)
y -= 51

y = section('Projetos em destaque', y)
projects = [
    ('Sistema de Estoque  |  Freelance · Em produção', 'Sistema vendido e usado por uma loja física real, hospedado em uma VPS Hostinger. Inclui dashboards, pagamentos Pix com QR Code, leitura de QR Code e integração com a API ViaCEP.'),
    ('SaúdeDela  |  Feira de ciências do IFBA', 'Plataforma sobre saúde da mulher com acompanhamento de ciclo e sintomas, insights de padrões, dashboard estatístico e chatbot educativo com RAG baseado em fontes públicas.'),
    ('Sistema Financeiro com IA  |  Em construção', 'Sistema para pequenas e médias empresas, desenvolvido do zero com arquitetura mais limpa. Prevê categorização automática de transações e consultas financeiras em linguagem natural.'),
]
for title, description in projects:
    draw_text(48, y, title, 9.7, True)
    y -= 14
    y = paragraph(description, y, size=8.8, width=114, leading=11.5)

y = section('Conhecimentos', y)
skills = [
    'Frontend: TypeScript, React, Next.js App Router, Tailwind CSS, styled-components',
    'Backend: Node.js, Fastify, Socket.io, JWT, bcrypt',
    'Dados: PostgreSQL, MongoDB, Prisma ORM',
    'Cloud e deploy: AWS, Vercel, Hostinger VPS, GitHub Actions',
    'IA: integração de LLMs, RAG e chatbots em aplicações web',
    'Fundamentos: C, Java e Python',
]
for item in skills:
    draw_text(48, y, item, 8.8)
    y -= 13

# Build a dependency-free, single-page PDF using standard Helvetica fonts.
content = b''.join(commands)
objects = [
    b'<< /Type /Catalog /Pages 2 0 R >>',
    b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    b'<< /Length ' + str(len(content)).encode('ascii') + b' >>\nstream\n' + content + b'endstream',
]
pdf = bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n')
offsets = [0]
for number, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf.extend(f'{number} 0 obj\n'.encode('ascii'))
    pdf.extend(obj)
    pdf.extend(b'\nendobj\n')
xref_offset = len(pdf)
pdf.extend(f'xref\n0 {len(objects) + 1}\n'.encode('ascii'))
pdf.extend(b'0000000000 65535 f \n')
for offset in offsets[1:]:
    pdf.extend(f'{offset:010d} 00000 n \n'.encode('ascii'))
pdf.extend(f'trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n'.encode('ascii'))
OUTPUT.write_bytes(pdf)
print(f'Created {OUTPUT} ({len(pdf)} bytes; content ends at y={y:.1f} pt)')
