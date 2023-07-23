class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        rows = {}
        columns = {}
        boxes = {}

        for y, row in enumerate(board):
            for x, value in enumerate(row):
                if value == ".":
                    continue

                # Rows
                values_at_row = rows.get(y, [])

                if value in values_at_row:
                    return False

                if not values_at_row:
                    rows[y] = [value]
                else:
                    rows[y].append(value)
                    

                # Columns
                values_at_column = columns.get(x, [])

                if value in values_at_column:
                    return False

                if not values_at_column:
                    columns[x] = [value]
                else:
                    columns[x].append(value)

                # Sub-boxes
                key = (x // 3, y // 3)
                
                values_at_box = boxes.get(key, [])

                if value in values_at_box:
                    return False

                if not values_at_box:
                    boxes[key] = [value]
                else:
                    boxes[key].append(value)

        # Checked all cells, board must be valid
        return True

