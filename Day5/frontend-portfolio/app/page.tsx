"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Calendar,
  Award,
  Code,
  Database,
  Smartphone,
  Globe,
  ChevronDown,
  Users,
  Trophy,
  Heart,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Wrench,
  Star,
  Activity,
  ExternalLink,
  Target,
  CheckCircle,
  TrendingUp,
  Terminal,
  Zap,
} from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  period: string
  technologies: string[]
  icon: any
  iconColor: string
  award?: string
  details: {
    concept: string
    mainServices: string[]
    responsibilities: string[]
    achievements: string[]
    techStack: string[]
  }
}

const projects: Project[] = [
  {
    id: "bum",
    title: "B:um (비움)",
    subtitle: "스트레스 관리 모바일 애플리케이션",
    description:
      "내 손 안의 스트레스 휴지통을 컨셉으로 한 안드로이드 애플리케이션 개발에 참여,\n아산나눔재단 주관 해커톤 APPJAM에서 대상 수상",
    period: "2021.06 - 2021.09",
    technologies: ["Android", "Kotlin", "Mobile UI/UX"],
    icon: Smartphone,
    iconColor: "text-emerald-400",
    award: "대상",
    details: {
      concept:
        "'내 손 안의 스트레스 휴지통'이라는 컨셉 기반의 어플리케이션으로, 스트레스를 글로 풀어내며 해소하는 사람들을 타겟으로 기획되었습니다.",
      mainServices: [
        "가시화 – 해소 – 환기의 핵심 가치",
        "스트레스를 글로 작성해 가시화한 뒤, 버리기라는 독창적인 방식으로 해소",
        "실제 버리는 모션으로 기분을 환기하고, 리워드를 통해 지속적인 사용 동기 부여",
      ],
      responsibilities: [
        "안드로이드 개발 담당",
        "가시화한 스트레스를 카테고리별로 보관하는 보관함 페이지 구현",
        "리워드 제공 페이지 구현",
      ],
      achievements: [
        "IT벤처창업연합 SOPT 주관 APPJAM 해커톤 대상 수상",
        "기획자 2명, 디자이너 3명, 개발자 12명과 협업하여 서비스 구현",
        "서비스 개발의 전 과정 참여",
      ],
      techStack: ["Kotlin", "Android"],
    },
  },
  {
    id: "fleamarket",
    title: "Online FleaMarket",
    subtitle: "교내 온라인 플리마켓 플랫폼",
    description:
      "교내 중앙동아리연합 주최 온라인 플리마켓 개발 및 운영,\n4일간 23개의 마켓이 개설되고 약 600개 상품이 거래됨",
    period: "2021.09",
    technologies: ["기획", "Backend", "Java", "Spring Boot"],
    icon: Globe,
    iconColor: "text-blue-400",
    details: {
      concept: "교내 중앙동아리연합에서 주최한 온라인 플리마켓 개발 및 운영 프로젝트입니다.",
      mainServices: [
        "이메일 인증을 통해 재학생만 접근 및 가입 가능",
        "판매자: 각각 별도의 카테고리 부여, 직접 판매할 물건 등록 및 수정 가능",
        "구매자: 쇼핑몰과 동일한 기능 이용 가능 (회원가입, 마이페이지, 장바구니, 구매 및 결제)",
        "직관적인 UI 설계 및 구현",
        "데이터베이스와 쿼리 최적화 설계",
        "개인정보 보호를 위한 데이터 암호화 및 학교 메일 인증 시스템",
      ],
      responsibilities: [
        "기획 및 백엔드 개발",
        "판매자 Oracle DB 등록 시스템 구현",
        "개인정보 및 장바구니 확인 가능한 마이페이지 구현",
        "판매자별 구매 물품 분류 장바구니 페이지 구현",
        "페이지 레이아웃 디자인",
      ],
      achievements: [
        "20여개의 마켓이 개설되어 4일간 운영",
        "약 600개의 상품이 거래됨",
        "학교 커뮤니티에 긍정적인 후기글 다수 게시",
        "실시간 모니터링을 통한 이슈 대응으로 서비스 신뢰성 유지",
      ],
      techStack: [
        "Java",
        "JavaScript",
        "Spring Boot",
        "Spring Framework",
        "JPA",
        "MySQL",
        "Oracle DB",
        "RESTful",
        "AWS",
      ],
    },
  },
  {
    id: "yanado",
    title: "Yanado",
    subtitle: "멀티 거래 플랫폼",
    description: "일반 쇼핑몰 기능에 경매 및 공동구매 기능을 추가한 멀티 거래 플랫폼을 개발",
    period: "2021.03 - 2021.06",
    technologies: ["기획", "Backend", "E-commerce", "MySQL"],
    icon: Globe,
    iconColor: "text-purple-400",
    details: {
      concept: "'야, 나도 사고싶어' - 일반적인 쇼핑몰의 기능에 경매와 공동구매 기능을 추가한 거래 플랫폼입니다.",
      mainServices: [
        "일반 쇼핑몰 기능: 로그인/로그아웃, 검색, 구매, 장바구니, 마이페이지 등",
        "경매 서비스: 판매자가 물건을 입찰하고 일정 시간이 지난 후 가장 높은 가격을 제시한 사람에게 낙찰",
        "공동구매 서비스: 구매를 원하는 물건에 대한 정보를 게시글로 작성하면 공동구매를 원하는 사용자들이 댓글을 달아 함께 구매 가능",
      ],
      responsibilities: [
        "기획 및 백엔드 개발",
        "회원 등록/삭제/멤버십 부여가 가능하도록 DB 처리",
        "개인정보 및 장바구니에 담은 물품을 확인할 수 있는 마이페이지 구현",
        "페이지 레이아웃 디자인",
      ],
      achievements: ["전공 과제의 수준에서 그치지 않고 중앙동아리연합 주최 온라인 플리마켓으로 발전"],
      techStack: ["Java", "JavaScript", "Spring Boot", "Spring Framework", "Oracle DB", "JPA", "MySQL"],
    },
  },
  {
    id: "somdongzi",
    title: "Somdongzi",
    subtitle: "유기동물 입양 매칭 플랫폼",
    description: "유기동물 보호소 알리미에 입양 테스트와 매칭 기능을 추가한 사회적 가치를 담은 입양 사이트 개발",
    period: "2020.09 - 2020.12",
    technologies: ["기획", "Backend", "Social Impact", "Matching Algorithm"],
    icon: Heart,
    iconColor: "text-red-400",
    details: {
      concept:
        "유기동물 보호소 알리미 사이트에 입양 테스트와 매칭 기능을 추가한 유기동물 입양 사이트입니다. 반려동물을 키우기에 적합한 사람에게 입양되어 행복한 입양생활을 보장하고자 기획되었습니다.",
      mainServices: [
        "유기동물 보호소 API를 사용하여 전국의 유기동물 보호소, 보호중인 동물 검색",
        "지역, 보호여부, 최신등록순을 조합하여 검색 가능",
        "입양 테스트: 입양희망자의 생활환경과 반려동물에 대한 기본지식을 점수화해 일정 점수 이상을 획득해야만 입양 페이지에 접근 가능",
        "매칭 기능: 희망조건(종, 성별, 크기 등)에 맞는 동물을 추천하여 입양이 더 효율적이고 책임감 있게 이루어지도록 함",
        "입양 테스트에서 70점 이상 취득한 사용자만 매칭 기능 이용 가능",
      ],
      responsibilities: [
        "기획 및 백엔드 개발",
        "지역/현재 보호여부(입양여부)/최신등록순 Sorting 검색 기능 구현",
        "API에서 데이터 추출 및 매칭 알고리즘 구현",
        "전체적인 페이지 레이아웃 디자인",
      ],
      achievements: ["최종 발표에서 실제로 출시되었으면 하는 서비스 1위를 차지하며 학우들의 많은 공감을 얻음"],
      techStack: ["Java", "JavaScript", "Spring Boot", "Spring Framework", "Oracle DB", "JPA", "MySQL"],
    },
  },
]

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "achievements", "activities"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "skills", icon: Wrench, label: "Skills" },
    { id: "achievements", icon: Trophy, label: "Awards" },
    { id: "activities", icon: Activity, label: "Activities" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-slate-800">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-xl transition-all duration-300 group relative ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                  title={item.label}
                >
                  <Icon size={20} />
                  <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-12 mb-12">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                안녕하세요,
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  백엔드 개발자
                </span>
                <br />
                <span className="text-blue-400">김지연입니다.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                안정적인 백엔드 시스템 구축과 데이터베이스 최적화에 관심이 많습니다.
                <br />
                데이터의 정확성과 시스템의 신뢰성을 바탕으로 가치를 만들어가고 있습니다.
              </p>
            </div>

            {/* Browser-style tabs */}
            <div className="inline-flex bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-1 max-w-fit">
              {[
                { label: "ME", section: "about" },
                { label: "경력", section: "experience" },
                { label: "프로젝트", section: "projects" },
                { label: "기술", section: "skills" },
                { label: "수상", section: "achievements" },
                { label: "활동", section: "activities" },
              ].map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => scrollToSection(tab.section)}
                  className="px-6 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown
              className="text-slate-500 animate-bounce cursor-pointer hover:text-blue-400 transition-colors"
              size={32}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="text-center space-y-8">
              <div className="space-y-8 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                <p className="text-2xl text-white font-medium">
                  안녕하세요!
                  <br />
                  저는 금융 시스템 백엔드 개발과 데이터베이스 설계에 관심을 가지고 있습니다.
                </p>
                <p>
                  한국산업은행에서 트레이딩 시스템 업무를 수행하며
                  <br />
                  금융 도메인의 복잡한 비즈니스 로직과 실시간 데이터 처리에 대한 이해를 보유하고 있습니다.
                </p>
                <p>
                  Java와 Spring Boot를 활용한 안정적인 API 개발부터 대용량 데이터베이스 최적화까지,
                  <br />
                  시스템의 신뢰성과 성능을 보장하는 백엔드 솔루션 구축에 전문성을 가지고 있습니다.
                </p>
              </div>

              <div className="flex justify-center flex-wrap gap-4 pt-8">
                <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-6 py-3 rounded-2xl text-base">
                  <Zap size={18} className="mr-2" />
                  Problem Solver
                </Badge>
                <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-6 py-3 rounded-2xl text-base">
                  <Users size={18} className="mr-2" />
                  Team Player
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-6 py-3 rounded-2xl text-base">
                  <Star size={18} className="mr-2" />
                  Innovation Driven
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Work Experience</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
              <CardHeader className="pb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">한국산업은행</CardTitle>
                    <CardDescription className="text-xl text-blue-400 font-medium">
                      코어금융부 트레이딩팀
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-2">
                    <Calendar size={14} />
                    2024.10 - 2025.01
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-7 gap-10">
                  <div className="md:col-span-5">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Target size={16} className="text-blue-400" />
                      주요 업무
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          트레이딩 시스템 관련 테스트 및 업무 보조
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          여신, 수신, 트레이딩, 외국환 업무 교육 이수
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          한국금융연수원 금융DT 연수 및 회계교육 연수
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp size={16} className="text-purple-400" />
                      성과 및 경험
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          KDB e-FX Pro 사용자 매뉴얼 검토 및 이관계 테스트
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          온라인 금융상품 설명의무 가이드라인 및 HTML 퍼블리싱
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card
                  key={project.id}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors">
                          <Icon className={project.iconColor} size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-slate-400">{project.subtitle}</CardDescription>
                        </div>
                      </div>
                      {project.award && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-xl flex items-center gap-1">
                          <Trophy size={12} />
                          {project.award}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-slate-500">{project.period}</div>
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 text-white">
          {selectedProject && (
            <>
              <DialogHeader className="pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-2xl">
                    <selectedProject.icon className={selectedProject.iconColor} size={32} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl flex items-center gap-3 text-white">
                      {selectedProject.title}
                      {selectedProject.award && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-xl">
                          <Trophy size={14} className="mr-1" />
                          {selectedProject.award}
                        </Badge>
                      )}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-slate-400 mt-2">
                      {selectedProject.subtitle} • {selectedProject.period}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                    <Target size={18} className="text-blue-400" />
                    프로젝트 개요
                  </h3>
                  <p className="text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    {selectedProject.details.concept}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                    <Star size={18} className="text-purple-400" />
                    주요 서비스
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.details.mainServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                    <Code size={18} className="text-emerald-400" />
                    담당 구현 부분
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.details.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                    <TrendingUp size={18} className="text-orange-400" />
                    성과
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.details.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <Trophy size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                    <Terminal size={18} className="text-slate-400" />
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Technical Skills</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Code className="text-blue-400" size={24} />
                    </div>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30">Java</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30">Spring Boot</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30">JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <Database className="text-emerald-400" size={24} />
                    </div>
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">MySQL</Badge>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Oracle Database
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Smartphone className="text-purple-400" size={24} />
                    </div>
                    Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30">Android</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30">Kotlin</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Achievements</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl text-white">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Trophy className="text-yellow-400" size={24} />
                      </div>
                      APPJAM 해커톤 대상
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-400 mt-2">
                      아산나눔재단, IT벤처창업연합 SOPT
                    </CardDescription>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-xl">
                    2021.07.31
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  대학생 IT벤처 창업 연합 SOPT에서 주관한 모바일/웹 어플리케이션 해커톤 APPJAM에서 입상함
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl text-white">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Award className="text-blue-400" size={24} />
                      </div>
                      행복나눔상 (최우수상)
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-400 mt-2">SK 행복나눔재단</CardDescription>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-xl">
                    2018.08.24
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Youth For Change Festival에 참가하여, 긍정적인 사회변화를주도하고 행복의 가치를 확산할 수 있는 우수
                  프로젝트로 선정됨
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="relative py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Activities</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  대학생연합 IT벤처창업동아리 SOPT 28th
                </CardTitle>
                <CardDescription className="text-lg text-slate-400 mt-2">
                  Android Developer (2021.03 - 2021.07)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-300 leading-relaxed mb-4">
                  <p>• 안드로이드 지식 학습 및 동료들과 코드 리뷰 진행</p>
                  <p>• 기획자, 디자이너, 개발자와 협업하여 서비스 구현</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    Android Development
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30">Code Review</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Team Collaboration
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Heart className="text-red-400" size={24} />
                  </div>
                  SK 대학생자원봉사단 SUNNY
                </CardTitle>
                <CardDescription className="text-lg text-slate-400 mt-2">Leader (2018.01 - 2019.01)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-300 leading-relaxed mb-4">
                  <p>• 아동·어르신·장애인 대상 자원봉사 프로그램 기획 및 진행</p>
                  <p>• 청년 대상 사회변화 프로젝트 기획 및 진행</p>
                  <p>• 총 148시간 이상 봉사활동 수행</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Leadership</Badge>
                  <Badge className="bg-pink-500/20 text-pink-400 border border-pink-500/30">Social Impact</Badge>
                  <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    Global Experience
                  </Badge>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-semibold text-white mb-2">Global Happinnovator Camp</h4>
                  <p className="text-sm text-slate-300">
                    중국 Putuo High School에서 진행한 한·중 대학생 교육봉사 프로그램 참가, 디자인 씽킹 교육 및 지역사회
                    문제 해결 모델 개발 (2018.07.31 - 2018.08.08)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-500 text-center border-t border-slate-800">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}
