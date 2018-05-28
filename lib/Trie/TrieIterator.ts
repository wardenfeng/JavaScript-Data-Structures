/**
 * Created by Stefano on 06/04/2014.
 * Modified by feng(http://feng3d.com) on 28/05/2018
 */
namespace ds
{
	export class TrieIterator<T> implements Iterator
	{
		/**
		 * The aggregate relates to this iterator.
		 * @type {Trie}
		 */
		aggregate: Trie<T>;

		/**
		 * The pointer to the position.
		 * @type {TNode|null}
		 */
		pointer: TNode<T> = <any>null;

		/**
		 * Class that implements the iterator for a trie.
		 * @param aggregate {Trie} The aggregate to scan.
		 * @constructor
		 */
		constructor(aggregate: Trie<T>)
		{
			this.aggregate = aggregate;
			this.pointer = <any>null;
		}

		/**
		 * @inheritDoc
		 */
		first()
		{
			this.pointer = this.aggregate.minimum();
		};

		/**
		 * @inheritDoc
		 */
		next()
		{
			this.pointer = this.aggregate.successor(this.pointer);
		};

		/**
		 * @inheritDoc
		 */
		last()
		{
			this.pointer = this.aggregate.maximum();
		};

		/**
		 * @inheritDoc
		 */
		previous()
		{
			this.pointer = this.aggregate.predecessor(this.pointer);
		};

		/**
		 * @inheritDoc
		 */
		isDone()
		{
			return !this.pointer;
		};

		/**
		 * @inheritDoc
		 */
		getItem()
		{
			return this.pointer.item;
		};
	}
}