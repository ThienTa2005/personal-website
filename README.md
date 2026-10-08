<div align="center">

# 🌐 Tạ Thanh Thiên — Personal Website & Portfolio

<p align="center">
  <strong>Java Backend & Full-Stack Developer • Information Technology Student at PTIT</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)

---

🔗 **Live Demo**: [thienta2005.github.io/personal-website](https://github.com/ThienTa2005/personal-website) &nbsp;|&nbsp; 📄 **Curriculum Vitae**: [`/cv.pdf`](frontend/public/cv.pdf) &nbsp;|&nbsp; 📬 **Contact**: [thien24112005@gmail.com](mailto:thien24112005@gmail.com)

</div>

<br />

## 📖 Giới thiệu (Overview)

Repository này chứa mã nguồn toàn bộ website cá nhân và hồ sơ năng lực (Portfolio) của **Tạ Thanh Thiên (Thiên)**.

Website được thiết kế theo phong cách kỹ sư tối giản (Minimalist Engineering Portfolio), tập trung vào hiệu năng vượt trội, kiểu chữ hiện đại (Geist Sans / Geist Mono), trải nghiệm đọc mượt mà và trực quan hóa các dự án thực tế trong hệ sinh thái Java Backend, Full-stack cũng như ứng dụng AI/Machine Learning.

Dự án được cấu trúc theo mô hình phân tách rõ ràng giữa **Frontend** (Next.js 16) và **Backend** (sẵn sàng tích hợp API dịch vụ).

---

## 📂 Cấu trúc Repository (Project Structure)

```text
personal_web/
├── frontend/                     # Ứng dụng Web Client (Next.js 16 + React 19)
│   ├── public/                   # Tài nguyên tĩnh (CV PDF, icons, llms.txt, v.v.)
│   ├── src/
│   │   ├── app/                  # Next.js App Router (Layout, Page, Global CSS)
│   │   ├── components/           # Các UI component độc lập (Header, Hero, SelectedWork, BlogSection, Footer)
│   │   ├── data/                 # Dữ liệu tĩnh tập trung (portfolioData.ts)
│   │   └── types/                # TypeScript interface & types
│   ├── package.json              # Quản lý thư viện và script Frontend
│   └── README.md                 # Hướng dẫn chi tiết riêng cho Frontend
├── backend/                      # Module Backend (RESTful APIs / Microservice - Spring Boot)
└── README.md                     # Tài liệu tổng quan dự án (file này)
```

---

## ✨ Tính năng nổi bật (Key Features)

- 🎨 **Thiết kế Minimalist & Hiện đại**: Sử dụng bộ font Geist chuẩn kỹ sư, bố cục gọn gàng, tương phản cao và tối ưu khả năng đọc.
- 🌓 **Hỗ trợ Dark / Light Theme mượt mà**: Chuyển đổi giao diện linh hoạt, lưu trạng thái vào `localStorage` và tích hợp script chống chớp nháy (zero-flicker).
- 💼 **Showcase dự án tương tác (Selected Work)**: Hiển thị các dự án tiêu biểu kèm thẻ nhãn dynamic `--work-tone`, thanh tiến trình và liên kết trực tiếp tới repository.
- 📝 **Ghi chú kỹ thuật & Thành tích (Notes & Certifications)**: Tổng hợp các bài viết kiến trúc hệ thống, giải thuật và các chứng chỉ chuyên môn (Samsung, TOEIC 765, NVIDIA Deep Learning,...).
- 📄 **Tích hợp xem & tải CV trực tiếp**: Tải và xem nhanh bản CV PDF tại `/cv.pdf`.
- 🤖 **Thân thiện với AI Agents & Web Crawlers**: Cung cấp sẵn endpoint `/llms.txt` và dữ liệu có cấu trúc Schema.org JSON-LD để các công cụ tìm kiếm và mô hình AI hiểu rõ hồ sơ năng lực.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

### **Frontend**
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Ngôn ngữ**: [TypeScript 5](https://www.typescriptlang.org/)

### **Backend & Dữ liệu (Chuyên môn & Định hướng tích hợp)**
- **Ngôn ngữ & Framework**: Java 17+, Spring Boot, Spring Data JPA, Spring Security
- **Cơ sở dữ liệu & Cache**: MySQL, PostgreSQL, Redis
- **Bảo mật**: JWT (JSON Web Token), OAuth2, Role-Based Access Control (RBAC)
- **Realtime**: Firebase Realtime Database

### **AI & Data Science**
- Python, Scikit-learn, Pandas, NumPy, Time Series Forecasting

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy (Getting Started)

### 1. Yêu cầu hệ thống (Prerequisites)
- [Node.js](https://nodejs.org/) phiên bản **18.18+** hoặc **20+**
- Trình quản lý gói: `npm`, `yarn`, `pnpm` hoặc `bun`

### 2. Clone Repository
```bash
git clone https://github.com/ThienTa2005/personal-website.git
cd personal-website
```

### 3. Cài đặt Dependencies cho Frontend
```bash
cd frontend
npm install
```

### 4. Khởi chạy môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 5. Build bản Production
```bash
npm run build
npm start
```

---

## 🏆 Dự án tiêu biểu (Featured Projects)

| Tên dự án | Thể loại | Công nghệ chủ đạo | Mô tả ngắn |
| :--- | :--- | :--- | :--- |
| **[Soundbook Social Network](https://github.com/Vinhdiesel28/Soundbook-social-network-web)** | Full Stack | ReactJS, Spring Boot, JWT, MySQL | Mạng xã hội âm thanh và sách; thuật toán gợi ý Taste DNA; xác thực bảo mật JWT & phân quyền. |
| **[Bookstore Web Platform](https://github.com/TranTrongHung123/book-store)** | E-Commerce | Spring Boot, ReactJS, Firebase, MySQL | Hệ thống bán sách với tính năng hỗ trợ khách hàng realtime qua Firebase, quản lý đơn hàng & RBAC. |
| **[FreshLink Web App](https://fresh-link-eight.vercel.app)** | Production | Java, React, Vercel, TailwindCSS | Nền tảng điều phối chuỗi cung ứng nông sản tươi; giao diện responsive triển khai thực tế trên Vercel. |
| **[Hospital Web Management](https://github.com/ThienTa2005/Hospital-web)** | Enterprise | Java JSP/Servlet, MySQL, MVC | Hệ thống quản lý bệnh viện: lịch khám, hồ sơ bệnh án và tối ưu chỉ mục cơ sở dữ liệu. |
| **[SJC Gold Price Predictor](https://github.com/ThienTa2005/SJC_Price_Predict_AI)** | AI / ML | Python, Scikit-learn, Pandas | Mô hình chuỗi thời gian (Time-series) dự báo biến động giá vàng trong nước. |

---

## 👨‍💻 Tác giả (Author)

**Tạ Thanh Thiên (Thiên)**  
- 🎓 Sinh viên năm 4 ngành Công nghệ Thông tin — **Học viện Công nghệ Bưu chính Viễn thông (PTIT)**
- 🎯 Mục tiêu: **Java Backend / Full-Stack Developer (Internship / Junior)**
- 🐙 GitHub: [@ThienTa2005](https://github.com/ThienTa2005)
- 💼 LinkedIn: [Tạ Thiên](https://www.linkedin.com/in/t%E1%BA%A1-thi%C3%AAn-a14a82390/)
- 📧 Email: [thien24112005@gmail.com](mailto:thien24112005@gmail.com)

---

## 📄 Giấy phép (License)

Dự án này được phân phối dưới giấy phép **MIT License**. Bạn hoàn toàn có thể tự do tham khảo và học hỏi từ mã nguồn.
