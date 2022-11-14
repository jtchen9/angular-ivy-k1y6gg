import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.test1'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });
  it('should highlight the upvote button if I have voted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.test2'));

    expect(de.classes['highlighted']).toBeTruthy();
  });
  it('should increase total votes when I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.test2'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
