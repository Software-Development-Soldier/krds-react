# KRDS (Korean Government Design System) Guidelines

KRDS is the official standard for digital government services in South Korea, aimed at providing a consistent, accessible, and high-quality user experience across all public digital platforms.

## 🏛️ CORE DESIGN PRINCIPLES
1. **User-Centered**: Prioritize citizen needs and intuitive usability.
2. **Inclusiveness**: Ensure universal accessibility (KWCAG 2.2, WCAG 2.1 Level AA).
3. **Individuality**: Balance institutional identity with a unified government-wide design.
4. **Simplicity**: Minimize cognitive load and provide clear communication.
5. **Ease of Use**: Design for efficiency and speed in task completion.
6. **Contextual Awareness**: Consider the user's environment and diverse service delivery points.
7. **Trust & Security**: Foster confidence through professional and reliable UI/UX.

## 📏 TECHNICAL STYLE STANDARDS
### Layout & Grid
- **12-Column Grid System**: Standard for desktop layouts.
- **Responsive Design**: Fluid layouts that adapt to tablet and mobile viewports.

### Typography
- **Primary Font**: **Pretendard GOV** (Standard for government services).
- **Hierarchy**: Strictly defined scales for Headings (H1-H6), Body Text, and Labels.

### Color Palette
- **Primary**: Government Blue (Trust).
- **Secondary**: Government Gold/Yellow (Highlight).
- **Neutral**: Systematic grayscale for layout, borders, and text.
- **Tokens**: Colors are managed via design tokens for consistent CSS variable implementation.

### Forms & Interactions
- **Class Prefix**: All components use the `krds-` prefix (e.g., `.krds-btn`, `.krds-input`).
- **Focus States**: Visible focus indicators (`:focus`) are mandatory for all interactive elements.

## ♿ ACCESSIBILITY COMPLIANCE (KWCAG 2.2)
- **Skip Navigation**: Use `.krds-skip-link` at the top of every page.
- **Contrast Ratios**: Minimum 4.5:1 for normal text and 3:1 for large text.
- **Semantic HTML**: Mandatory use of ARIA roles and proper heading structures.
- **Checklist**: Refer to the "디지털 정부 서비스 UIUX 가이드라인 자체 검증 체크리스트.pdf" for final validation.

---
*Reference: [KRDS Style Guide](https://www.krds.go.kr/html/site/style/style_01.html)*
