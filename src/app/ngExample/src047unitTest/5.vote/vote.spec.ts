import { VoteComponent } from "./vote";

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component= new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes:any = null;
    component.voteChanged.subscribe((tv: any) => totalVotes = tv);

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});