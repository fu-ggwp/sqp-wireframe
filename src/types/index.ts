export type Role = 'Guest' | 'Learner' | 'Teacher' | 'Admin';
export type AccountStatus = 'active' | 'locked' | 'pending';
export type Visibility = 'public' | 'private' | 'class-only';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionType = 'multiple-choice' | 'true-false' | 'written-answer';
export type ExamStatus = 'draft' | 'scheduled' | 'open' | 'closed';
export type PaymentStatus = 'success' | 'failed' | 'pending';
export type NotificationStatus = 'read' | 'unread';

export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  role: Exclude<Role, 'Guest'>;
  status: AccountStatus;
  premium: boolean;
  avatar: string;
  bio: string;
  joinedAt: string;
  lastActive: string;
}

export interface StudySet {
  id: string;
  title: string;
  description: string;
  subject: string;
  topic: string;
  visibility: Visibility;
  ownerId: string;
  ownerName: string;
  questionCount: number;
  learners: number;
  rating: number;
  tags: string[];
  coverImage: string;
  assignedClassIds: string[];
  progress?: number;
}

export interface ClassRoom {
  id: string;
  name: string;
  subject: string;
  description: string;
  teacherId: string;
  teacherName: string;
  code: string;
  status: 'active' | 'archived';
  memberIds: string[];
  studySetIds: string[];
  createdAt: string;
}

export interface JoinRequest {
  id: string;
  classId: string;
  learnerId: string;
  learnerName: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
}

export interface Question {
  id: string;
  bankId: string;
  type: QuestionType;
  content: string;
  options: string[];
  correctAnswer: string;
  learnerAnswer?: string;
  explanation: string;
  aiExplanation: string;
  score: number;
  tags: string[];
  subject: string;
  topic: string;
  chapter: string;
  lesson: string;
  difficulty: Difficulty;
}

export interface QuestionBank {
  id: string;
  title: string;
  description: string;
  subject: string;
  topic: string;
  visibility: Visibility;
  ownerId: string;
  ownerName: string;
  questionIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ImportErrorRecord {
  row: number;
  field: string;
  message: string;
  rawValue: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  classId: string;
  className: string;
  teacherId: string;
  questionBankId: string;
  status: ExamStatus;
  startTime: string;
  durationMinutes: number;
  attemptsAllowed: number;
  showResult: boolean;
  randomizeQuestions: boolean;
  randomizeAnswers: boolean;
  questionIds: string[];
}

export interface ExamAttempt {
  id: string;
  examId: string;
  learnerId: string;
  learnerName: string;
  status: 'not-started' | 'in-progress' | 'submitted';
  score: number;
  accuracy: number;
  submittedAt?: string;
  answers: Record<string, string>;
}

export interface ProgressMetric {
  label: string;
  value: number;
  unit: string;
  trend: string;
}

export interface AnalyticsRecord {
  id: string;
  className: string;
  studySetTitle: string;
  averageScore: number;
  accuracy: number;
  weakTopic: string;
  learnersCompleted: number;
}

export interface PremiumPlan {
  id: string;
  name: string;
  price: string;
  interval: string;
  audience: 'Learner' | 'Teacher' | 'Both';
  benefits: string[];
  highlighted?: boolean;
}

export interface PaymentResult {
  transactionId: string;
  planName: string;
  amount: string;
  status: PaymentStatus;
  paidAt: string;
}

export interface SystemService {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: string;
  responseTime: string;
  lastChecked: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  actor: Exclude<Role, 'Guest'>;
  status: NotificationStatus;
  createdAt: string;
}

export interface RouteMeta {
  section: string;
  screen: string;
  route: string;
  actor: string;
  relatedUc: string;
  group: string;
}
