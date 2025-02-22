import { EndUser } from '@app/model/convs-mgr/conversations/chats';
import { AssessmentCursor, Cursor } from '@app/model/convs-mgr/conversations/admin/system';

/** Represents details about an end user.*/
export interface EndUserDetails {
  /** The user.*/
  user: EndUser;

  /** The user's name.*/
  name: string;

  /** The user's list of cursors. */
  cursor: Cursor[];

  /**
   * the user's score category - either pass/fail
   */
  scoreCategory?: string;
  /**
   * The user's selected assessmentCursor
   * This is important for optimisations when visualising data(results table and result graph)
  */
  selectedAssessmentCursor?: AssessmentCursor

  /**
   * Additional properties that can be accessed using a string index - (for the matDataSource sortingDataAccessor).
   * @type {any}
  */
  [key: string]: any; 
}
