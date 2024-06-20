import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any[] = [];
  currentQuestion: any;
  timeLeft: number = 30;
  interval: any;
  currentQuestionIndex: number = 0;
  score: number = 0;
  items: string[] = []; // Declarar la variable items

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    this.route.params.subscribe(params => {
      this.currentQuestionIndex = +params['id'];
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.items = this.currentQuestion.options; // Asignar opciones a items
    });
  }

  answer(option: string) {
    if (option === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    const nextQuestionIndex = this.currentQuestionIndex + 1;
    if (nextQuestionIndex < this.questions.length) {
      this.router.navigate(['/question', nextQuestionIndex]);
    } else {
      this.router.navigate(['/results'], { state: { score: this.score } });
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.answer(''); // Automatically move to next question or end the quiz
      }
    }, 1000);
  }
}


