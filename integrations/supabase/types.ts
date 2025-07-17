export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      access_codes: {
        Row: {
          active: boolean
          code: string
          created_at: string
          id: string
          stripe_session_id: string | null
          used_at: string | null
          user_id: string | null
        }
        Insert: {
          active?: boolean
          code: string
          created_at?: string
          id?: string
          stripe_session_id?: string | null
          used_at?: string | null
          user_id?: string | null
        }
        Update: {
          active?: boolean
          code?: string
          created_at?: string
          id?: string
          stripe_session_id?: string | null
          used_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          coach: string | null
          created_at: string
          date_rdv: string
          id: string
          statut: string
          user_id: string
        }
        Insert: {
          coach?: string | null
          created_at?: string
          date_rdv: string
          id?: string
          statut?: string
          user_id: string
        }
        Update: {
          coach?: string | null
          created_at?: string
          date_rdv?: string
          id?: string
          statut?: string
          user_id?: string
        }
        Relationships: []
      }
      content: {
        Row: {
          corps: string
          date_mise_a_jour: string
          id: string
          titre: string
          type: string
        }
        Insert: {
          corps: string
          date_mise_a_jour?: string
          id?: string
          titre: string
          type: string
        }
        Update: {
          corps?: string
          date_mise_a_jour?: string
          id?: string
          titre?: string
          type?: string
        }
        Relationships: []
      }
      content_versions: {
        Row: {
          changelog: string | null
          content_data: Json
          content_id: string
          content_type: string
          created_at: string
          created_by: string
          id: string
          version_number: number
        }
        Insert: {
          changelog?: string | null
          content_data: Json
          content_id: string
          content_type: string
          created_at?: string
          created_by: string
          id?: string
          version_number: number
        }
        Update: {
          changelog?: string | null
          content_data?: Json
          content_id?: string
          content_type?: string
          created_at?: string
          created_by?: string
          id?: string
          version_number?: number
        }
        Relationships: []
      }
      course_purchases: {
        Row: {
          access_code_id: string | null
          amount: number
          course_type: string
          created_at: string
          currency: string
          id: string
          status: string
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          access_code_id?: string | null
          amount: number
          course_type?: string
          created_at?: string
          currency?: string
          id?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          access_code_id?: string | null
          amount?: number
          course_type?: string
          created_at?: string
          currency?: string
          id?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_purchases_access_code_id_fkey"
            columns: ["access_code_id"]
            isOneToOne: false
            referencedRelation: "access_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_templates: {
        Row: {
          concepts: string[] | null
          created_at: string
          created_by: string
          description: string | null
          difficulty_range: number[] | null
          example_values: Json | null
          id: string
          is_active: boolean
          name: string
          parameters: Json
          template_latex: string
          updated_at: string
        }
        Insert: {
          concepts?: string[] | null
          created_at?: string
          created_by: string
          description?: string | null
          difficulty_range?: number[] | null
          example_values?: Json | null
          id?: string
          is_active?: boolean
          name: string
          parameters?: Json
          template_latex: string
          updated_at?: string
        }
        Update: {
          concepts?: string[] | null
          created_at?: string
          created_by?: string
          description?: string | null
          difficulty_range?: number[] | null
          example_values?: Json | null
          id?: string
          is_active?: boolean
          name?: string
          parameters?: Json
          template_latex?: string
          updated_at?: string
        }
        Relationships: []
      }
      exercises: {
        Row: {
          concepts: string[] | null
          created_at: string
          created_by: string
          description: string | null
          difficulty_level: number | null
          estimated_time_minutes: number | null
          hints: string[] | null
          id: string
          image_urls: string[] | null
          is_active: boolean
          lesson_id: string | null
          problem_statement: string
          problem_statement_latex: string | null
          solution: string | null
          solution_latex: string | null
          tags: string[] | null
          title: string
          updated_at: string
          version: number
        }
        Insert: {
          concepts?: string[] | null
          created_at?: string
          created_by: string
          description?: string | null
          difficulty_level?: number | null
          estimated_time_minutes?: number | null
          hints?: string[] | null
          id?: string
          image_urls?: string[] | null
          is_active?: boolean
          lesson_id?: string | null
          problem_statement: string
          problem_statement_latex?: string | null
          solution?: string | null
          solution_latex?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          version?: number
        }
        Update: {
          concepts?: string[] | null
          created_at?: string
          created_by?: string
          description?: string | null
          difficulty_level?: number | null
          estimated_time_minutes?: number | null
          hints?: string[] | null
          id?: string
          image_urls?: string[] | null
          is_active?: boolean
          lesson_id?: string | null
          problem_statement?: string
          problem_statement_latex?: string | null
          solution?: string | null
          solution_latex?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "exercises_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          date: string
          id: string
          input: string
          retour: string | null
          user_id: string
        }
        Insert: {
          date?: string
          id?: string
          input: string
          retour?: string | null
          user_id: string
        }
        Update: {
          date?: string
          id?: string
          input?: string
          retour?: string | null
          user_id?: string
        }
        Relationships: []
      }
      flashcard_reviews: {
        Row: {
          correct_count: number
          created_at: string
          difficulty: number
          flashcard_id: string
          id: string
          next_review_date: string
          review_count: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          correct_count?: number
          created_at?: string
          difficulty?: number
          flashcard_id: string
          id?: string
          next_review_date?: string
          review_count?: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          correct_count?: number
          created_at?: string
          difficulty?: number
          flashcard_id?: string
          id?: string
          next_review_date?: string
          review_count?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flashcard_reviews_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "flashcards"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcards: {
        Row: {
          created_at: string
          id: string
          sentence_en: string
          sentence_fr: string
          user_id: string
          word_en: string
          word_fr: string
        }
        Insert: {
          created_at?: string
          id?: string
          sentence_en: string
          sentence_fr: string
          user_id: string
          word_en: string
          word_fr: string
        }
        Update: {
          created_at?: string
          id?: string
          sentence_en?: string
          sentence_fr?: string
          user_id?: string
          word_en?: string
          word_fr?: string
        }
        Relationships: []
      }
      grammar_errors: {
        Row: {
          correct_answer: string
          created_at: string | null
          error_type: string
          french_sentence: string
          grammar_point: string
          id: string
          language: string
          reviewed: boolean | null
          rule: string
          student_answer: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          correct_answer: string
          created_at?: string | null
          error_type: string
          french_sentence: string
          grammar_point: string
          id?: string
          language: string
          reviewed?: boolean | null
          rule: string
          student_answer: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          correct_answer?: string
          created_at?: string | null
          error_type?: string
          french_sentence?: string
          grammar_point?: string
          id?: string
          language?: string
          reviewed?: boolean | null
          rule?: string
          student_answer?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          content: string | null
          content_latex: string | null
          created_at: string
          created_by: string
          description: string | null
          difficulty_level: number | null
          duration_minutes: number | null
          id: string
          is_active: boolean
          module_id: string
          order_index: number
          prerequisites: string[] | null
          title: string
          updated_at: string
          version: number
        }
        Insert: {
          content?: string | null
          content_latex?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean
          module_id: string
          order_index?: number
          prerequisites?: string[] | null
          title: string
          updated_at?: string
          version?: number
        }
        Update: {
          content?: string | null
          content_latex?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean
          module_id?: string
          order_index?: number
          prerequisites?: string[] | null
          title?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_active: boolean
          order_index: number
          slug: string
          title: string
          updated_at: string
          version: number
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_active?: boolean
          order_index?: number
          slug: string
          title: string
          updated_at?: string
          version?: number
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_active?: boolean
          order_index?: number
          slug?: string
          title?: string
          updated_at?: string
          version?: number
        }
        Relationships: []
      }
      pricing: {
        Row: {
          description: string
          id: string
          offre: string
          prix: number
          quota_essais: number
        }
        Insert: {
          description: string
          id?: string
          offre: string
          prix: number
          quota_essais: number
        }
        Update: {
          description?: string
          id?: string
          offre?: string
          prix?: number
          quota_essais?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          python_access_granted: boolean | null
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          python_access_granted?: boolean | null
          role?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          python_access_granted?: boolean | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      progress: {
        Row: {
          completed_activities: Json | null
          id: string
          module: string
          progression: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_activities?: Json | null
          id?: string
          module: string
          progression?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_activities?: Json | null
          id?: string
          module?: string
          progression?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      school_profiles: {
        Row: {
          created_at: string
          generated_data: Json
          id: string
          requested_by: string
          school_slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          generated_data: Json
          id?: string
          requested_by: string
          school_slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          generated_data?: Json
          id?: string
          requested_by?: string
          school_slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          commentaires: string | null
          date: string
          id: string
          note: number | null
          status: string | null
          texte: string
          title: string | null
          user_id: string
        }
        Insert: {
          commentaires?: string | null
          date?: string
          id?: string
          note?: number | null
          status?: string | null
          texte: string
          title?: string | null
          user_id: string
        }
        Update: {
          commentaires?: string | null
          date?: string
          id?: string
          note?: number | null
          status?: string | null
          texte?: string
          title?: string | null
          user_id?: string
        }
        Relationships: []
      }
      teacher_analytics: {
        Row: {
          created_at: string
          date_recorded: string
          id: string
          metadata: Json | null
          metric_name: string
          metric_value: number | null
        }
        Insert: {
          created_at?: string
          date_recorded?: string
          id?: string
          metadata?: Json | null
          metric_name: string
          metric_value?: number | null
        }
        Update: {
          created_at?: string
          date_recorded?: string
          id?: string
          metadata?: Json | null
          metric_name?: string
          metric_value?: number | null
        }
        Relationships: []
      }
      user_access_codes: {
        Row: {
          access_code: string
          created_at: string | null
          granted_at: string | null
          id: string
          module_name: string
          user_id: string
        }
        Insert: {
          access_code: string
          created_at?: string | null
          granted_at?: string | null
          id?: string
          module_name: string
          user_id: string
        }
        Update: {
          access_code?: string
          created_at?: string | null
          granted_at?: string | null
          id?: string
          module_name?: string
          user_id?: string
        }
        Relationships: []
      }
      user_activity_history: {
        Row: {
          activity_type: string
          created_at: string
          generator_type: string | null
          id: string
          input_data: Json | null
          metadata: Json | null
          output_data: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string
          generator_type?: string | null
          id?: string
          input_data?: Json | null
          metadata?: Json | null
          output_data?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string
          generator_type?: string | null
          id?: string
          input_data?: Json | null
          metadata?: Json | null
          output_data?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      has_role: {
        Args: {
          user_id: string
          required_role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "user" | "prof" | "admin" | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["user", "prof", "admin", "super_admin"],
    },
  },
} as const
